import React from "react";
import { StyledForm } from "./styled";

const Form = (props) => (
  <StyledForm onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <button>Get weather</button>
  </StyledForm>
);

export default Form;
