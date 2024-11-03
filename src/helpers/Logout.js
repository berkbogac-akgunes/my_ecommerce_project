import { useDispatch } from "react-redux";
import { axiosInstance } from "./axios";

export const Logout = () => {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
    useDispatch({ type: 'LOGOUT' });
};