import axios from './Axios';

export const getProyectsRequest = () => axios.get('/ProyectRSU');

export const getProyectRequest = (id) => axios.get(`/ProyectRSU/${id}`);

export const createProyectRequest = (proyect) => axios.post('/ProyectRSU', proyect);

export const updateProyectRequest = (id, proyect) => axios.put(`/ProyectRSU/${id}`, proyect);

export const deleteProyectRequest = (id) => axios.delete(`/ProyectRSU/${id}`);
