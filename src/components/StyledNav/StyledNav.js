import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 24px;
    position: relative;
    z-index: 10;
    background-color: var(--lightBlueBerry);
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

const StyledSubNavContent = styled.div`
    display: none;
    position: absolute;
    bottom: -36px;
    left: 0;
    width: 100%;
    flex-direction: row;
    padding-top: 10px;
    gap: 24px;
    justify-content: center;
    background-color: var(--lightBlueBerry);
`

const StyledPseudoNav = styled.div`
    font-size: 24px;
    line-height: 125%;
    font-weight: 500;
    text-decoration: none;
    color: var(--fontColorGray);
    cursor: default;
    &:hover {
        color: var(--fontColorPrimary);
    }
    & .active,
    & .active:hover {
        color: transparent;
        background: var(--gradient);
        background-clip: text;
        -webkit-background-clip: text;
    }
`

const StyledSubNav = styled.div`
    &:hover {
        display: flex;
        color: var(--fontColorPrimary);
    }
    &:hover ${StyledSubNavContent} {
        display: flex;
    }
`

export { StyledNav }
export { StyledSubNav }
export { StyledSubNavContent }
export { StyledPseudoNav }