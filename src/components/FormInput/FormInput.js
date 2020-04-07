import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInputStyles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
