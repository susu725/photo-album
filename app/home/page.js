'use client';

import { useEffect, useState } from 'react';
import List from '../_components/List/List';
import styles from './page.module.scss'
import { getAlbumsApi } from '../api/api';

export default function Home() {
    const [albums, setAlbums] = useState(null)
    const userId = localStorage.getItem('userId')

    // 取得該使用者的所有相簿
    const getAlbums = async () => {
        try {
            const albums = await getAlbumsApi(userId)
            setAlbums(albums)
        } catch (err) {
            console.log(err)
        }
    }

    const albumsReander = albums?.map(album => {
        return <List key={album.id} album={album} />
    })

    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <div className={styles.home}>123
            {albumsReander}
        </div>
    )
}