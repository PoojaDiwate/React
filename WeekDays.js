import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //import bootsrap- npm install bootstrap

const WeekDays = () => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="container mt-3">
      <h2>Weekdays</h2>
      <ul>
        {weekdays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>

      <h2>Select a Day</h2>
      <select className="form-select w-25" area-lable="Select a weekdays">
        {weekdays.map((day, index) => (
          <option key={index} value={day}>{day}</option>
        ))}
      </select>
    </div>
  );
};

export default WeekDays;

