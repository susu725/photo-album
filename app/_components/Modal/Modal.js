'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShare, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.scss'

export default function Modal({ handleClose, photo }) {
    const { id, title, url } = photo

    return (
        <div className={styles.modal}>
            <div className={styles.nav}>
                <div />
                <div className={styles.functionList}>
                    <button>
                        <p>Download</p>
                        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                    </button>
                    <button>
                        <p>Share</p>
                        <FontAwesomeIcon icon={faShare} className={styles.icon} />
                    </button>

                    <button>
                        <p>Info</p>
                        <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
                    </button>
                </div>
                <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} className={styles.cross} />
                </button>
            </div>
            <img src={url} alt='#' className={styles.img} />
            <p className={styles.title}>{title}</p>
        </div>
    )
}