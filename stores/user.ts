export const useUser = defineStore('userStore', {
  state: () => ({
    authUser: {},
    authenticated: false,
  }),

  getters: {
    user: (state: any): any => state.authUser,
    isAuthenticated: (state: any): boolean => state.authenticated,
    api: (): any => {
      const { $api } = useNuxtApp();
      return $api;
    },
  },

  actions: {
    async getAuthenticatedUser() {
      try {
        const { data } = await this.api.get('/me');
        this.authUser = data.data;
        this.authenticated = true;
      } catch (error) {
        this.authenticated = false;
      }
    },
    async logout() {
      try {
        await this.api.post('/auth/logout');
        this.authUser = {};
      } catch (error) {
        console.log(error);
      } finally {
        this.authenticated = false;
      }
    }
  },
});
