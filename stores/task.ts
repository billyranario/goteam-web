import { ITasks } from '~/interfaces/task.interface';

export const useTasks = defineStore('tasks', {
  state: () => ({
    task: {} as ITasks,
    statusList: {} as any,
    paginatedData: {
      data: [] as ITasks[],
      meta: {} as any,
      links: {} as any,
    },
  }),

  getters: {
    task: (state) => state.task,
    data: (state) => state.paginatedData.data,
    meta: (state) => state.paginatedData.meta,
    links: (state) => state.paginatedData.links,
    statuses: (state) => state.statusList,
    api: (): any => {
      const { $api } = useNuxtApp();
      return $api;
    },
  },

  actions: {
    async getTasks(params: { [key: string]: string | number } = {}) {
      try {
        const { data } = await this.api.get('/tasks', { params });
        this.paginatedData = {
          data: data.data,
          meta: data.meta,
          links: data.links,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async getTaskStatuses() {
      try {
        const { data } = await this.api.get('/tasks/statuses');
        this.statusList = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id: number) {
      try {
        await this.api.delete(`/tasks/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
