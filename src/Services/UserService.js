import axios from 'axios';
import { axiosInstance } from "./Axios"

export function getUserById(id) {
    return axiosInstance.get(`api/users/${id}`)
    .then(response => {
        console.log(response.data);
        console.log(response.status);
        return response.data;
    })
}