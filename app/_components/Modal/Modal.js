"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faShare, faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { TitleBtn } from "../Btn/Btn";
import styles from "./Modal.module.scss";

export default function Modal({ handleClose, photo }) {
    const { title, url } = photo;

    return (
        <div className={styles.modal}>
            <div className={styles.nav}>
                <div />
                <div className={styles.functionList}>
                    <TitleBtn title='Download' icon={faDownload} />
                    <TitleBtn title='Share' icon={faShare} />
                    <TitleBtn title='Info' icon={faCircleInfo} />
                </div>
                <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} className={styles.cross} />
                </button>
            </div>
            {/* <div className={styles.main}> */}
            <img src={url} alt='#' className={styles.img} />
            <div className={styles.imgInfo}>
                <p className={styles.title}>
                    <span>Title</span>
                    {title}
                </p>
                <div className={styles.userAction}>
                    <TitleBtn title='Like' icon={far.faHeart} />
                    <TitleBtn title='Save' icon={far.faBookmark} />
                </div>
                {/* </div> */}
            </div>

        </div>
    );
}