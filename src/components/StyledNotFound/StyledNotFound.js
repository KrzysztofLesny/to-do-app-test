import styled from "styled-components";

const StyledNotFound = styled.div`
  height: 100dvh;
  display: grid;
  place-items: center;
  & div {
      width: 60vw;
      height: fit-content;
      padding: 40px;
      border: black 4px solid;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  & h1 {
      font-size: 180px;
      font-weight: 900;
      color: cyan;
      -webkit-text-stroke: 2px black;
      position: relative;
      &::before,
      &::after{
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: 0;
          -webkit-text-stroke: 2px black;
      }
      &::before {
        color: firebrick;
        transform: translate(-5px, 5px);
      }
      &::after {
        color: white;
        transform: translate(-10px, 10px);
      }
  }
  & h2 {
      font-size: 24px;
      line-height: 140%;
  }
  & a,
  & a:hover {
    color: var(--backupBackgroundColor);
  }
`

export { StyledNotFound }