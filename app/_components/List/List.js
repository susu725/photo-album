'use client';

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import Item from '../Item/Item'
import styles from './List.module.scss'
import { getPhotosApi } from '@/app/api/api'

export default function List({ album }) {
    const { id, title } = album
    const [photos, setPhotos] = useState(null)

    // 取得該相簿的所有照片
    const getPhotos = async () => {
        try {
            const photos = await getPhotosApi(id)
            setPhotos(photos)
        } catch (err) {
            console.log(err)
        }
    }

    const photosReander = photos?.map(photo => {
        return <Item key={photo.id} photo={photo} />
    })

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <div className={styles.list}>
            <Link href={`/overview/${id}`} className={styles.link}>
                <FontAwesomeIcon icon={far.faBookmark} className={styles.icon} />
                <p className={styles.title}>{title}</p>
            </Link>
            <div className={styles.photos}>
                {photosReander}
            </div>
        </div>
    )
}