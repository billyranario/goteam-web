import Form from 'vform';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const { $api } = useNuxtApp();

  const vForm = (initialState = {}) => {
    Form.axios = $api;
    return new Form(initialState);
  };

  return {
    provide: {
      vForm,
    },
  };
});
