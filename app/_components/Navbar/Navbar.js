import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus, faBell } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.scss'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <button className={styles.search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                </button>
            </div>
            <div className={styles.functionList}>
                <button className={styles.plus}>
                    <p>Submit a photo</p>
                    <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                </button>
                <button className={styles.notify}>
                    <FontAwesomeIcon icon={faBell} className={styles.icon} />
                </button>
            </div>
        </div>
    )
}