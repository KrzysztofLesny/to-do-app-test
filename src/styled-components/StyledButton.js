import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--darkBlueBerry);
  color: var(--white);
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
    outline: 3px solid var(--backupBackgroundColor);
  }
`
export { StyledButton };