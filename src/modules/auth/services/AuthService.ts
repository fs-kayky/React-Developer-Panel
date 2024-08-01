import axios from "axios";
import { toast } from "react-toastify";

const url = axios.create({
    baseURL: "https://api.github.com/users"
})

export const useAuthApi = () => ({
    signin:async (username: string) => {
        try {
            const { data }  = await url.get(`/${username}`)
            return data;
        } catch (error) {
            toast.error("Usuário não encontrado")
        }
    },

});
