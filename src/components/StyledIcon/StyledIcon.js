import styled from "styled-components";

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & div {
    cursor: pointer;
    width: 18px;
    display: flex;
    align-items: center;
  }
  & img {
    width: 100%;
    object-fit: cover;
  }  
`

export { StyledIcon }