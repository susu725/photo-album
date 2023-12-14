import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com";

// 新增一個 instance
const axiosInstance = axios.create({
    baseURL: baseURL,
});

export const getUsersApi = async () => {
    try {
        const { data } = await axiosInstance.get(`${baseURL}/users`);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getAlbumsApi = async (userId) => {
    try {
        const { data } = await axiosInstance.get(`${baseURL}/albums?userId=${userId}`);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getPhotosApi = async (albumId) => {
    try {
        const { data } = await axiosInstance.get(`${baseURL}/photos?albumId=${albumId}`);
        return data;
    } catch (err) {
        console.log(err);
    }
};