import ReduxToDoInputForm from '../../components/ReduxToDoInputForm';
import ReduxToDosList from '../../components/ReduxToDosList';

import styles from '../../App.module.css'

import { Provider } from 'react-redux';
import { toDoStore } from '../../redux/toDoStore';

export const Redux = () => {
    return (
        <>
            <Provider store={toDoStore}>
                <h2 className={styles.subHeader}>using Redux</h2>
                <ReduxToDoInputForm/>
                <h2 className={styles.smallHeading}>Tasks</h2>
                <ReduxToDosList/>
            </Provider>
        </>
    )
}