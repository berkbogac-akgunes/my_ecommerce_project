import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Assuming you are using Redux for state management
import { axiosInstance } from './axios';
import { setUser } from '@/store/actions/clientActions';

export const AutoLogin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Set token in axios header
            axiosInstance.defaults.headers.common['Authorization'] = token;

            // Verify token
            const verifyToken = async () => {
                try {
                    const response = await axiosInstance.get('/verify');
                    const user = response.data;

                    // Dispatch user info to redux store
                    dispatch(setUser(user));
                } catch (error) {
                    // If token is not authorized, clean up
                    console.log(error)
                    localStorage.removeItem('token');
                    delete axiosInstance.defaults.headers.common['Authorization'];
                }
            };

            verifyToken();
        }
    }, [dispatch]);
}