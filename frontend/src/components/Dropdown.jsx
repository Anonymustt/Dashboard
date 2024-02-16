import React from 'react';
import '../css/Dropdown.css'; 

const Dropdown = ({ label, options, selectedOption, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="dropdown">{label}</label>
      <select className="dropdown-select" id="dropdown" value={selectedOption} onChange={e => onChange(e.target.value)}>
        <option value="">Select...</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
