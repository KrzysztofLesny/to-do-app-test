import {
    NavLink,
    Outlet
} from 'react-router-dom'
import { ToDoProvider } from "../../context/ToDoContext";
import { Header } from "../../styled-components/Header";
import { StyledApp } from "../../styled-components/StyledApp";

export const RootLayout = () => {
    return (
        <ToDoProvider>
            <StyledApp>
                <Header>
                    <h1>TO DO APP</h1>
                    <nav>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='context' >useContext</NavLink>
                        <NavLink to='state' >useState</NavLink>
                        <NavLink to='redux' >Redux</NavLink>
                    </nav>
                </Header>
                <main>
                    <Outlet />
                </main>
            </StyledApp>
        </ToDoProvider>
    )
}