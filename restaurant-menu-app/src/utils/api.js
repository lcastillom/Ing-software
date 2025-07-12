import axios from 'axios';

const API_MENU_URL = process.env.REACT_APP_API_MENUS_URL || 'http://localhost:3002/api';
const API_USERS_URL = process.env.REACT_APP_API_USERS_URL || 'http://localhost:3001/api';

export const getMenu = () => axios.get(`${API_MENU_URL}/menu`);

export const loginUserPatch = (email, contrasena) =>
  axios.patch(`${API_USERS_URL}/users/login`, { email, contrasena });

export const loginUserPost = (user) =>
  axios.post(`${API_USERS_URL}/login`, user);

// Nueva función para registrar usuario
export const registerUser = (user) =>
  axios.post(`${API_USERS_URL}/users`, user);