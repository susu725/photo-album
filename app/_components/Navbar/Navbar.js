import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faBell } from "@fortawesome/free-solid-svg-icons";
import { TitleBtn } from "../Btn/Btn";
import styles from "./Navbar.module.scss";

export const Btn = ({ icon }) => {
    return (
        <button className={styles.btn}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
        </button>
    );
};

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Btn icon={faMagnifyingGlass} />
            <div className={styles.functionList}>
                <TitleBtn title='Submit a photo' icon={faPlus} />
                <Btn icon={faBell} />
            </div>
        </div>
    );
}