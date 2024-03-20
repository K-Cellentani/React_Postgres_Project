import './style.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState('');
  const [payroll, setPayroll] = useState('');
  const [year, setYear] = useState('2022');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      state: state,
      payroll: payroll,
      year: year
    };

    fetch("/api", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResponseData(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <h1>React Census Data Project</h1>
      <form onSubmit={handleSubmit}>
        <h3>Add Census Payroll Data</h3>
        <label htmlFor="state">Select State:</label>
        <select name="state" value={state} onChange={(e) => setState(e.target.value)}>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="District of Columbia">District of Columbia</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
        </select> <br />
        <br />
        <label htmlFor="payroll">Input the total annual payroll amount:</label>
        <input type="number" name="payroll" placeholder="Payroll" value={payroll} onChange={(e) => setPayroll(e.target.value)} />
        <br />
        <label htmlFor="year">Select Year:</label>
        <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
