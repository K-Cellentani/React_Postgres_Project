import express from 'express';
import bodyParser from 'body-parser';
import pool from './src/db.js'; 


const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.post('/api', (req, res) => {
  const { state, year, payroll } = req.body;

  try {
    const parsedYear = parseInt(year);
    const parsedPayroll = parseInt(payroll);

    const sqlString = `
    INSERT INTO census_payroll (state, year, annual_payroll)
    VALUES ($1, $2, $3)
    ON CONFLICT (state, year)
    DO UPDATE SET annual_payroll = EXCLUDED.annual_payroll
    RETURNING *;
    `;

    const values = [state, parsedYear, parsedPayroll];
    const result = pool.query(sqlString, values);

    console.log({ state, year, payroll }); 
    return res.json(result);
    

  } catch (err) {
    console.error(err);
    res.status(500).send("There was an error saving the census data");
  }

});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
