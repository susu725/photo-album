import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com'

// 新增一個 instance
const axiosInstance = axios.create({
    baseURL: baseURL,
})

export const getUsersApi = async () => {
    try {
        const { data } = await axiosInstance.get(`${baseURL}/users`)
        return data
    } catch (err) {
        console.log(err)
    }
}