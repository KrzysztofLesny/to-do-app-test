import styled from "styled-components";

const Button = styled.button`
  background-color: hsl(271, 76%, 30%);
  color: rgb(255, 255, 255);
  border: none;
  font-size: 24px;
  line-height: 110%;
  font-weight: 600;
  padding: 8px 24px;
  border-radius: 500px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  cursor: pointer;
  
  :focus,
  :focus-visible {
    outline: 3px solid rgb(255,111,97);;
  }
`
export { Button };