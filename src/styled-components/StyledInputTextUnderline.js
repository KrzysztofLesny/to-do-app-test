import styled from "styled-components";

const StyledInputTextUnderline = styled.span`
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  bottom: -2px;
  background: rgba(255,111,97,1);
  background: linear-gradient(90deg, rgba(255,111,97,1) 0%, rgba(241,91,124,1) 20%, rgba(214,83,148,1) 40%, rgba(175,85,166,1) 60%, rgba(124,89,175,1) 80%, rgba(58,91,172,1) 100%);
  ::before {
    content: '';
    position: absolute;
    inset: 0px;
    background-color: #111;
    z-index: 1;
    transition: opacity 250ms;
  }
`

export { StyledInputTextUnderline }