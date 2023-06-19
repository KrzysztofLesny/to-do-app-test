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

const InputFormBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1000;
  background-color: rgba(1, 1, 1, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`

export { InputFormBackdrop }
export { StyledForm }