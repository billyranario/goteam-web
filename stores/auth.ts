const localStorageConstant = useStorageConstant();

export const useAuth = defineStore('authentication', {
  state: () => ({
    tokenValue: '' as string,
  }),

  getters: {
    token: (state: any): string => state.tokenValue,
  },

  actions: {
    async initToken(): Promise<void> {
      if (process.client) {
        const token: string | null = localStorage.getItem(
          localStorageConstant.TOKEN,
        );
        this.tokenValue = token ?? '';
      }
    },
    setToken(token: string): void {
      localStorage.setItem(localStorageConstant.TOKEN, token);
    },
    removeAuthToken(): void {
      if (process.client) {
        localStorage.removeItem(localStorageConstant.TOKEN);
      }
    },
    clearStorage(): void {
      localStorage.clear();
    },
  },
});
