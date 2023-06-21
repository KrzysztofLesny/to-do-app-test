import styled from "styled-components";

const StyledApiResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    min-width: 40dvw;
    padding: 24px;
`

const StyledApiResultsHeader = styled.h2`
    font-size: 24px;
    line-height: 125%;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
`

const StyledApiResultsTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const StyledApiResultsTableHeader = styled.div`
    display: flex;
    font-weight: 600;
    padding-bottom: 12px;
    & p:nth-of-type(1) {
        width: 8%;
    }
    & p:nth-of-type(2) {
        width: 47%;
    }
    & p:nth-of-type(3) {
        width: 15%;
    }
    & p:nth-of-type(4) {
        width: 15%;
    }
    & p:nth-of-type(5) {
        width: 15%;
    }
`

const StyledApiResultsTableRow = styled.div`
    display: flex;
    gap: 12px 0px;
    border-bottom: 1px solid var(--gradientColor4);
    padding: 2px 0px 12px;
    &:last-of-type {
        border-bottom: 0px;
    }
    & p:nth-of-type(1) {
        width: 8%;
    }
    & p:nth-of-type(2) {
        width: 47%;
    }
    & p:nth-of-type(3) {
        width: 15%;
    }
    & p:nth-of-type(4) {
        width: 15%;
    }
    & p:nth-of-type(5) {
        width: 15%;
    }
`

export { StyledApiResultsContainer }
export { StyledApiResultsHeader }
export { StyledApiResultsTable }
export { StyledApiResultsTableHeader }
export { StyledApiResultsTableRow }