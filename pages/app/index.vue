<template>
  <div class="container mx-auto p-4">
    <!-- Search Input -->
    <div class="mb-4">
      <input
        type="text"
        placeholder="Search..."
        class="p-2 w-full border rounded focus:ring focus:ring-opacity-50 focus:ring-blue-300"
        @input="onSearch($event)"
      />
    </div>

    <!-- Table -->
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="border px-4 py-2 text-left">Title</th>
          <th class="border px-4 py-2 text-left">Description</th>
          <th class="border px-4 py-2 text-left">Due Date</th>
          <th class="border px-4 py-2 text-left">Status</th>
          <th class="border px-4 py-2 text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks.data" :key="index">
          <td class="border px-4 py-2">{{ task.title }}</td>
          <td class="border px-4 py-2">{{ task.description }}</td>
          <td class="border px-4 py-2">{{ formatDate(task.dueDate) }}</td>
          <td class="border px-4 py-2">{{ getStatus(task.status) }}</td>
          <td class="border px-4 py-2">
            <div class="flex justify-end gap-4">
              <button
                type="button"
                class="px-4 py-2 border rounded focus:ring focus:ring-opacity-50 focus:ring-blue-300"
                @click="handleEditTask('edit-task', task)"
              >
                Edit
              </button>

              <button
                type="button"
                class="px-4 py-2 border rounded focus:ring focus:ring-opacity-50 text-white bg-red-400 focus:ring-blue-300"
                @click="handleDeleteTask(task)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 flex justify-between">
      <button
        :disabled="!tasks.links.prev"
        class="px-4 py-2 border rounded focus:ring focus:ring-opacity-50 focus:ring-blue-300"
        @click="paginate(tasks.meta.current_page - 1)"
      >
        Prev
      </button>

      <span
        >Page {{ tasks.meta.current_page }} of {{ tasks.meta.last_page }}</span
      >

      <button
        :disabled="!tasks.links.next"
        class="px-4 py-2 border rounded focus:ring focus:ring-opacity-50 focus:ring-blue-300"
        @click="paginate(tasks.meta.current_page + 1)"
      >
        Next
      </button>
    </div>
  </div>

  <UiModal name="create-task" title="Add Task" :open="isOpen('create-task')">
    <form class="relative p-5" @submit.prevent="create">
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Title<span class="text-red-500 font-semibold font-bold"> *</span>
          <input
            v-model="state.form.title"
            type="text"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          />
        </label>
        <p
          v-if="state.form.errors.has('title')"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">{{ state.form.errors.get('title') }}</span>
        </p>
      </div>
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Description
          <textarea
            v-model="state.form.description"
            rows="3"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          ></textarea>
        </label>
      </div>
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Due Date
          <input
            v-model="state.form.dueDate"
            type="date"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          />
        </label>
        <p
          v-if="state.form.errors.has('dueDate')"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">{{
            state.form.errors.get('dueDate')
          }}</span>
        </p>
      </div>
      <div class="text-right mt-4">
        <UiButton
          type="submit"
          :loading="state.loading"
          class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800"
        >
          Create Task
        </UiButton>
      </div>
    </form>
  </UiModal>

  <UiModal name="edit-task" title="Edit Task" :open="isOpen('edit-task')">
    <form class="relative p-5" @submit.prevent="update">
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Title<span class="text-red-500 font-semibold font-bold"> *</span>
          <input
            v-model="state.form.title"
            type="text"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          />
        </label>
        <p
          v-if="state.form.errors.has('title')"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">{{ state.form.errors.get('title') }}</span>
        </p>
      </div>
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Description
          <textarea
            v-model="state.form.description"
            rows="3"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          ></textarea>
        </label>
      </div>
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Due Date
          <input
            v-model="state.form.dueDate"
            type="date"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          />
        </label>
        <p
          v-if="state.form.errors.has('dueDate')"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">{{
            state.form.errors.get('dueDate')
          }}</span>
        </p>
      </div>
      <div class="mb-4">
        <label class="text-sm block text-gray-500">
          Status
          <select
            v-model="state.form.status"
            class="text-base w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-800 placeholder-gray-400 bg-white shadow-sm"
          >
            <option
              v-for="(status, index) in tasks.statuses"
              :key="index"
              :value="index"
            >
              {{ status }}
            </option>
          </select>
        </label>
        <p
          v-if="state.form.errors.has('dueDate')"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">{{
            state.form.errors.get('dueDate')
          }}</span>
        </p>
      </div>
      <div class="text-right mt-4">
        <UiButton
          type="submit"
          :loading="state.loading"
          class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800"
        >
          Update Task
        </UiButton>
      </div>
    </form>
  </UiModal>
</template>

<script setup lang="ts">
import { useModal, useToaster } from '@/stores/ui';
import { useTasks } from '@/stores/task';
import { ITasks } from '~/interfaces/task.interface';

definePageMeta({
  layout: 'main',
});

const modal = useModal();
const toaster = useToaster();
const tasks = useTasks();
const { $vForm } = useNuxtApp();
const { isOpen, close, open } = modal;
const { openToaster } = toaster;
const { getTasks, getTaskStatuses, deleteTask } = tasks;
const dueDate = new Date();
const state = reactive({
  searchTimeout: null as NodeJS.Timeout | null,
  loading: false,
  form: $vForm({
    id: null,
    title: '',
    description: '',
    dueDate: new Date(dueDate.getTime() - dueDate.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0],
    status: 0,
  }),
});
const params = reactive({
  page: 1,
  perPage: 10,
  search: '',
});

const getPaginatedTasks = async (
  params: { [key: string]: string | number } = {},
) => {
  await getTasks(params);
};

const create = async () => {
  state.loading = true;
  try {
    await state.form.post('/tasks');
    getPaginatedTasks(params);
    openToaster({
      type: 'success',
      message: 'Task created.',
    });
    close();
  } catch (error: any) {
    const { response } = error;
    const { data } = response;

    openToaster({
      type: 'error',
      message: data?.error ?? 'Please correct the required fields.',
    });
  } finally {
    state.loading = false;
  }
};
const update = async () => {
  state.loading = true;
  try {
    await state.form.put(`/tasks/${state.form.id}`);
    getPaginatedTasks(params);
    openToaster({
      type: 'success',
      message: 'Task updated.',
    });
    close();
  } catch (error: any) {
    const { response } = error;
    const { data } = response;

    openToaster({
      type: 'error',
      message: data?.error ?? 'Please correct the required fields.',
    });
  } finally {
    state.loading = false;
  }
};
const onSearch = (event: Event): void => {
  const inputElement = event.target as HTMLInputElement;
  const search = inputElement.value;

  if (state.searchTimeout) {
    clearTimeout(state.searchTimeout);
  }

  state.searchTimeout = setTimeout(() => {
    params.page = 1;
    params.search = search;
    getPaginatedTasks(params);
  }, 500);
};
const paginate = (page: number): void => {
  params.page = page;
  getPaginatedTasks(params);
};
const handleEditTask = (modalName: string, task: ITasks): void => {
  const dueDate = new Date(task.dueDate);
  const localDueDate = new Date(
    dueDate.getTime() - dueDate.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];

  state.form.fill({
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: localDueDate,
    status: task.status,
  });

  open(modalName);
};
const handleDeleteTask = async (task: ITasks) => {
  if (confirm('Do you wish to delete this task?')) {
    await deleteTask(task.id as number);
    getPaginatedTasks(params);
  }
};

onMounted(() => {
  getPaginatedTasks(params);
  getTaskStatuses();
});
</script>
