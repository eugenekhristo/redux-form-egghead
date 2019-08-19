import React from 'react';
import ReactJson from 'react-json-view';

export const CustomInput = props => (
  <div>
    <label>{props.label}</label>
    <input type={props.type} {...props.input} />
    <ReactJson src={props} />
  </div>
);

export const CustomSelect = props => (
  <div>
    <label>{props.label}</label>
    <select {...props.input}>
      <option value="tabs">Tabs</option>
      <option value="spaces">Spaces</option>
    </select>
  </div>
);
