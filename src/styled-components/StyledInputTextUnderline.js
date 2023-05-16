import styled from "styled-components";

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

export { StyledInputTextUnderline }