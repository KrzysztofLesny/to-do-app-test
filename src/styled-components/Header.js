import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
  align-items: center;
  padding: 16px 0px;
  box-shadow: 2px 2px 4px 0px rgba(18, 18, 18, 0.5);

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
  }
  
`

export { Header }