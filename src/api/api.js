import * as axios from "axios";


const instanceaxios = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b410f667-cba0-4d42-8eb6-ac5667818eee"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instanceaxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};

