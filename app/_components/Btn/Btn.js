import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Btn/Btn.module.scss";

export const TitleBtn = ({ title, icon }) => {
    return (
        <button className={styles.btn}>
            <p>{title}</p>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
        </button>
    );
};