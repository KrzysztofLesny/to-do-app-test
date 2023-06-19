import { NavLink } from 'react-router-dom'
import {StyledNotFound} from "../../components/StyledNotFound";

export const NotFound = () => {
    return (
        <StyledNotFound>
            <div>
                <h1 data-content='404'>404</h1>
                <h2>The page you page you were trying to access does not exist. Might I suggest going back to the <NavLink to={'/'}>Homepage</NavLink></h2>
            </div>
        </StyledNotFound>
    )
}