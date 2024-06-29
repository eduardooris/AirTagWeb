import { http } from "./http";

export const login = async ({ username, password }) => {
    try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const response = await http({
            url: 'login',
            method: 'POST',
            body: formData,
            contentType: 'multipart/form-data'
        })
        return response
    } catch (error) {
        return error
    }
}