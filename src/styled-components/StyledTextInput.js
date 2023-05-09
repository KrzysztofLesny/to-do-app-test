import styled from "styled-components";
import {StyledInputTextUnderline} from "./StyledInputTextUnderline";
import {StyledInputTextLabel} from "./StyledInputTextLabel";

const StyledTextInput = styled.input`
    background-color: transparent;
    padding: 4px;
    border: none;
    position: relative;
    font-size: 16px;
    @media screen and (min-width: 600px) { 
      min-width: 300px;
    }
    :focus,
    :focus-visible {
      outline: none;
    }
    :focus ~ ${StyledInputTextUnderline}::before {
      opacity: 0;
    }
    :placeholder-shown + ${StyledInputTextLabel} {
      transform: translate(6px, 2px);
    }
    :focus + ${StyledInputTextLabel} {
      transform: translate(0px, -24px);
    }
`

export { StyledTextInput }