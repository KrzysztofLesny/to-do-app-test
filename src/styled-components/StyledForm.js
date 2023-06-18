import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  display: flex;
  font-size: 16px;
  line-height: 140%;
  padding: 48px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 1em;
  @media screen and (min-width: 600px) {  
    flex-direction: row;
  }
`

export { StyledForm }