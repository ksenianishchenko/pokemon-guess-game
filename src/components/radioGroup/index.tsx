import React from "react";

import "./styles.scss";

type RadioGroupTypes = {
  id: string;
  value: string;
  name: string;
  classAdd?: string;
  checked?: boolean;
  handleClick: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = (props: RadioGroupTypes) => {
  const {id, name, value, classAdd, checked, handleClick} = props;

  return <div className="radio-group">
    <input
        className="radio-group-input"
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleClick}
    />
    <label className="radio-group-label" htmlFor={id}><span>{value}</span></label>
  </div>
}

export default RadioGroup;