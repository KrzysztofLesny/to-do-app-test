import { NavLink } from 'react-router-dom'
import styles from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.notFound__wrapper}>
                <h1 className={styles.notFound__header} data-content='404'>404</h1>
                <h2 className={styles.notFound__subheader}>The page you page you were trying to access does not exist. Might I suggest going back to the <NavLink className={styles.notFound__link} to={'/'}>Homepage</NavLink></h2>
            </div>
        </div>
    )
}