import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder, maxLength }) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="input-element"
      />
    </div>
  );
};

export default InputField;
