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
  & nav {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  & a {
    font-size: 24px;
    line-height: 125%;
    font-weight: 500;
    text-decoration: none;
    color: var(--fontColorGray);
  }
  & a:hover {
    color: var(--fontColorPrimary);
  }
  & a.active,
  & a.active:hover {
    color: transparent;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
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