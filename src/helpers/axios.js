import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});


{/*
try {
  await axiosInstance.post('/signup', formData)
  console.log(formData)
  } catch (error) {
      console.error(error);
    }
  }
    */}