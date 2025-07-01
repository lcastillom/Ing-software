import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_MENUS_URL || 'http://localhost:3002/api';

export const getMenu = () => axios.get(`${API_BASE_URL}/menu`);

// Puedes agregar más funciones aquí si necesitas otros endpoints en el futuro