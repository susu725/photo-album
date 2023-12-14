"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../_components/Navbar/Navbar";
import List from "../_components/List/List";
import styles from "./page.module.scss";
import { getAlbumsApi } from "../api/api";

export default function Home() {
    const [user, setUser] = useState(null);
    const [albums, setAlbums] = useState(null);

    // 取得該使用者的所有相簿
    const getAlbums = async (id) => {
        try {
            const albums = await getAlbumsApi(id);
            setAlbums(albums);
        } catch (err) {
            console.log(err);
        }
    };

    const albumsReander = albums?.map(album => {
        return <List key={album.id} album={album} />;
    });

    useEffect(() => {
        const userInfo = JSON.parse(localStorage?.getItem("userInfo"));
        const { id } = userInfo;

        setUser(userInfo);
        getAlbums(id);
    }, []);

    return (
        <div className={styles.home}>
            <Navbar />
            {
                user ?
                    <>
                        <div className={styles.userInfo}>
                            <h3>{user.name}</h3>
                            <div className={styles.email}>
                                <FontAwesomeIcon icon={faShare} className={styles.icon} />
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div>
                            {albumsReander}
                        </div>
                    </>
                    :
                    <div />
            }
        </div>
    );
}