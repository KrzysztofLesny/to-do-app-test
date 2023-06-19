import {
    NavLink,
    Outlet
} from 'react-router-dom'
import { ToDoProvider } from "../../context/ToDoContext";
import { StyledHeader } from "../../components/StyledHeaders";
import { StyledApp } from "../../components/StyledApp";

export const RootLayout = () => {
    return (
        <ToDoProvider>
            <StyledApp>
                <StyledHeader>
                    <h1>TO DO APP</h1>
                    <nav>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='context' >useContext</NavLink>
                        <NavLink to='state' >useState</NavLink>
                        <NavLink to='redux' >Redux</NavLink>
                    </nav>
                </StyledHeader>
                <main>
                    <Outlet />
                </main>
            </StyledApp>
        </ToDoProvider>
    )
}