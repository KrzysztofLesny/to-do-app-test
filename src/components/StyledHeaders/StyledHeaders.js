import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
  align-items: center;
  padding: 16px 0px;
  box-shadow: var(--boxShadow);

  & h1 {
    font-size: 45px;
    line-height: 110%;
    font-weight: 600;
  }
`

const StyledSubHeader = styled.h2`
  font-size: 30px;
  line-height: 125%;
  font-weight: 600;
  margin-bottom: 24px;
`

export { StyledSubHeader }
export { StyledHeader }