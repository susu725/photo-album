'use client';

import { useEffect, useState } from 'react'
import Navbar from '../_components/Navbar/Navbar';
import List from '../_components/List/List'
import styles from './page.module.scss'
import { getAlbumsApi } from '../api/api'

export default function Home() {
    const [albums, setAlbums] = useState(null)

    const userInfo = localStorage?.getItem('userInfo')
    const { id, name, email } = JSON.parse(userInfo)

    // 取得該使用者的所有相簿
    const getAlbums = async () => {
        try {
            const albums = await getAlbumsApi(id)
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
        <div className={styles.home}>
            <Navbar />
            <div className={styles.userInfo}>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
            <div>
                {albumsReander}
            </div>
        </div>
    )
}