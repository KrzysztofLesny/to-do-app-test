import {
    NavLink,
    Outlet
} from 'react-router-dom'
import styles from './RootLayout.module.css'

export const RootLayout = () => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1>TO DO APP</h1>
                <nav>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='context' >useContext</NavLink>
                    <NavLink to='state' >useState</NavLink>
                    <NavLink to='redux' >Redux</NavLink>
                </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}