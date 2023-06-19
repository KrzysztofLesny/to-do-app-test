import styled from "styled-components";

const StyledLabel = styled.label`
  position: relative;
  isolation: isolate;
`


const StyledInputTextLabel = styled.span`
  position: absolute;
  left: 0px;
  transform: translate(0px, -24px);
  transition: transform 250ms;
  z-index: -1;
`

const StyledInputTextUnderline = styled.span`
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  bottom: -2px;
  background: var(----backupBackgroundColor);
  background: var(--gradient);
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    background-color: #111;
    z-index: 1;
    transition: opacity 250ms;
  }
`

const StyledTextInput = styled.input`
    background-color: transparent;
    padding: 4px;
    border: none;
    position: relative;
    font-size: 16px;
    @media screen and (min-width: 600px) { 
      min-width: 300px;
    }
    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none;
    }
    &:focus ~ ${StyledInputTextUnderline}::before {
      opacity: 0;
    }
    &:placeholder-shown + ${StyledInputTextLabel} {
      transform: translate(6px, 2px);
    }
    &:focus + ${StyledInputTextLabel} {
      transform: translate(0px, -24px);
    }
`

export { StyledInputTextUnderline }
export { StyledInputTextLabel }
export { StyledTextInput }
export { StyledLabel }