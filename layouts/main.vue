<template>
  <div class="flex min-h-screen">
    <aside
      class="bg-gray-800 text-white w-1/4 md:w-1/5 lg:w-1/6 p-4 hidden md:block"
    >
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">GoTeam Task Management</h2>
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center text-gray-300 hover:text-white"
              @click="handleCreateTask('create-task')"
              ><i class="fas fa-plus w-5 h-5 mr-2"></i> Create A Task
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <main class="flex-1">
      <header class="bg-white py-4 shadow-md sticky top-0 z-25">
        <div class="container mx-auto flex justify-between items-center px-4">
          <h1 class="text-2xl font-semibold">GoTeam Task Management</h1>
          <nav>
            <ul class="flex space-x-4">
              <li>Hi, {{ user.user.name }}</li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-800"
                  @click="onLogout"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div class="container mx-auto py-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@/stores/ui';
import { useUser, useAuth } from '~/stores';

const router = useRouter();
const modal = useModal();
const user = useUser();
const auth = useAuth();
const { open } = modal;
const { logout } = user;
const { clearStorage } = auth;
const props = defineProps<{
  title: string;
}>();

const handleCreateTask = (modalName: string): void => {
  open(modalName);
};
const onLogout = (): void => {
  if (confirm('This will end your session. Press OK to continue.')) {
    logout();
    clearStorage();
    router.push('/auth/login');
  }
};
</script>

<style>
@media (max-width: 768px) {
  aside {
    display: none;
  }
}
</style>
