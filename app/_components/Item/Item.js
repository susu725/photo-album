"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "../Modal/Modal";
import styles from "./Item.module.scss";

export default function Item({ photo }) {
    const { url } = photo;
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = e => {
        setIsOpen(false);
        e.stopPropagation();
    };

    return (
        <div className={pathname === "/home" ? styles.homeItem : styles.overviewItem} onClick={handleOpen} >
            <img src={url} alt='#' className={styles.img} />
            {isOpen && (<Modal handleClose={handleClose} photo={photo} />)}
            <div className={isOpen ? styles.mask : ""} onClick={handleClose} />
        </div>
    );
}