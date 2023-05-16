import styled from "styled-components";

const StyledToDo = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 4px;
    color: var(--fontColorPrimary);
    & > span {
        width: 100%;
        padding-left: 36px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    & > span.done {
      text-decoration: line-through var(--darkBlueBerry) solid 3px;
    }
    & > span::after,
    & > span::before {
        position: absolute;
        box-sizing: border-box;
    }
    & > span::after {
        content: '';
        height: 18px;
        width: 18px;
        border: 3px solid var(--darkBlueBerry);
        border-radius: 50%;
        align-self: center;
        left: 0;
    }
    & span::before {
        height: 6px;
        width: 6px;
        border: 4px solid var(--darkBlueBerry);
        border-radius: 50%;
        align-self: center;
        left: 5px;
    }
    & > span.done::before {
      content: '';
    }
`

export { StyledToDo }