import { IToaster } from '~/interfaces/ui';

export const useToaster = defineStore('toaster', {
  state: () => ({
    toasts: [] as IToaster[],
  }),

  getters: {
    allToasts: (state: any): IToaster[] => state.toasts,
  },

  actions: {
    openToaster(toast: IToaster) {
      const id = Date.now();
      toast.id = id;
      this.toasts.push(toast);

      setTimeout(() => {
        this.closeToaster(id);
      }, toast.duration || 3000);
    },

    closeToaster(id: number) {
      const index = this.toasts.findIndex((toast) => toast.id === id);
      if (index !== -1) {
        this.toasts.splice(index, 1);
      }
    },
  },
});
