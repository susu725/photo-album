'use client';

import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import styles from './List.module.scss'
import { getPhotosApi } from '@/app/api/api';

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
        <div>
            {photosReander}
        </div>
    )
}