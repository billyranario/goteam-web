import axios from 'axios';
import { useAuth } from '~/stores';

export default defineNuxtPlugin(() => {
  const auth = useAuth();

  const api = axios.create({
    baseURL: 'http://localhost:8882/api', // TODO: move to env
  });

  const headers = computed(() => {
    const token = auth.token;
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  });

  api.interceptors.request.use((config) => {
    const token = auth.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  return {
    provide: {
      api,
    },
  };
});
