import React from 'react';

export const CustomInput = ({ input, meta, label, type }) => (
  <div>
    <label>{label}</label>
    <input type={type} {...input} />
    {meta.touched && meta.error && (
      <div style={{ color: 'red' }}>{meta.error}</div>
    )}
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
