import React from 'react';

const OptionalOptions = ({ options, type, setState, state }) => {
  const handleChange = e => {
    setState({ [type]: e.target.value });
  };

  return (
    <select
      selected={state[type]}
      onChange={e => {
        handleChange(e);
      }}
    >
      {options.map((value, i) => {
        return (
          <option key={i} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default OptionalOptions;
