import styled from "styled-components";

const StyledSmallButton = styled.button`
      height: 24px;
      display: block;
      cursor: pointer;
      border: none;
      font-weight: 600;
      position: relative;
      border-radius: 6px;
      transition: color 250ms;
    & span {
      position: relative;
      z-index: 3;
      background-color: var(--white);
      padding: 4px 8px;
      border-radius: 4px;
      display: block;
      height: 100%;
      line-height: 16px;
    }
    &::after,
    &::before {
      content: '';
      position: absolute;
      inset: -2px;
    }
    &::before {
      z-index: 1;
      background: var(--backupBackgroundColor);
      background: var(--gradient);
      border-radius: 6px;
      transition: opacity 250ms;
    }
    &::after {
      z-index: 2;
      background-color: #000;
      border-radius: 6px;
      transition: opacity 250ms;
    }
    &:hover::after {
      opacity: 0;
    }
`

export { StyledSmallButton }