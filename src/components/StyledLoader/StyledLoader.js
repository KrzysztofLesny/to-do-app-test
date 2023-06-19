import styled, { keyframes } from "styled-components";

const loader = keyframes`
    50% {
        height: 64px;
    }
`;


const StyledLoader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    position: relative;
    height: 64px;
    justify-content: center;
    align-items: center;
    & div {
        height: 32px;
        width: 16px;
        animation: ${loader} 1200ms infinite;
    }
    & div:nth-of-type(1) {
        background-color: var(--gradientColor1);
        animation-delay: -400ms;
    }
    & div:nth-of-type(2) {
        background-color: var(--gradientColor2);
        animation-delay: -320ms;
    }
    & div:nth-of-type(3) {
        background-color: var(--gradientColor3);
        animation-delay: -240ms;
    }
    & div:nth-of-type(4) {
        background-color: var(--gradientColor4);
        animation-delay: -160ms;
    }
    & div:nth-of-type(5) {
        background-color: var(--gradientColor5);
        animation-delay: -80ms;
    }
    & div:nth-of-type(6) {
        background-color: var(--gradientColor6);
        animation-delay: 0ms;
    }
`

export { StyledLoader }