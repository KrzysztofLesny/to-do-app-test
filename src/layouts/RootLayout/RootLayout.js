import {
    NavLink,
    Outlet
} from 'react-router-dom'
import { ToDoProvider } from "../../context/ToDoContext";
import { StyledHeader } from "../../components/StyledHeaders";
import { StyledApp } from "../../components/StyledApp";
import { StyledNav, StyledPseudoNav, StyledSubNav, StyledSubNavContent } from '../../components/StyledNav';

export const RootLayout = () => {
    return (
        <ToDoProvider>
            <StyledApp>
                <StyledHeader>
                    <h1>TO DO APP</h1>
                    <StyledNav>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='context' >useContext</NavLink>
                        <NavLink to='state' >useState</NavLink>
                        <NavLink to='redux' >Redux</NavLink>
                        <StyledSubNav>
                            <StyledPseudoNav>API</StyledPseudoNav>
                            <StyledSubNavContent>
                                <NavLink to='api/effect' >useEffect</NavLink>
                                <NavLink to='api/query' >React Query</NavLink>
                                <NavLink to='api/loader' >Router Loader</NavLink>
                            </StyledSubNavContent>
                        </StyledSubNav>
                    </StyledNav>
                </StyledHeader>
                <main>
                    <Outlet />
                </main>
            </StyledApp>
        </ToDoProvider>
    )
}