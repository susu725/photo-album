'use client';

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Navbar from '@/app/_components/Navbar/Navbar'
import Item from '../../_components/Item/Item'
import styles from './page.module.scss'
import { getPhotosApi } from '@/app/api/api'

export default function Overview() {
    const [photos, setPhotos] = useState(null)
    const pathname = usePathname()
    const params = useSearchParams()

    const id = pathname.match(/[0-9]+/)
    const title = params.get('title')

    // 取得該相簿的所有照片
    const getPhotos = async (id) => {
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
        getPhotos(id)
    }, [])

    return (
        <div className={styles.overview}>
            <Navbar />
            <h3>{title}</h3>
            <div className={styles.photos}>
                {photosReander}
            </div>
        </div>
    )
}