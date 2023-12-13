'use client';

import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './Item.module.scss'

export default function Item({ photo }) {
    const { id, url } = photo
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        console.log('open')
        setIsOpen(true)
    }

    const handleClose = e => {
        console.log('close')
        setIsOpen(false)
        e.stopPropagation()
    }

    return (
        <div className={styles.item} onClick={handleOpen} >
            <img src={url} alt='#' className={styles.img} />
            {isOpen && (<Modal handleClose={handleClose} photo={photo} />)}
            <div className={isOpen ? styles.mask : ''} />
        </div>
    )
}