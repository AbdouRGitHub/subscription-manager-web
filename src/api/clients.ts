import ky from 'ky';

const apiClient = ky.create({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
});

export default apiClient;