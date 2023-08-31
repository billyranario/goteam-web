export const useModal = defineStore('modal', {
  state: () => ({
    openModal: null as string | null,
  }),

  getters: {
    isOpen: (state: any) => (modalName: string): boolean => state.openModal === modalName,
  },

  actions: {
    open(modalName: string) {
      this.openModal = modalName || null;
    },

    close() {
      this.openModal = null;
    },
  },
});

