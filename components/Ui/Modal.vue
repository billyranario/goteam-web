<template>
  <div v-if="modal.isOpen(props.name)">
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div
        class="bg-white mx-auto rounded shadow-lg overflow-visible w-full h-full lg:h-auto lg:w-3/12"
      >
        <div
          class="flex items-center justify-between text-gray-700 border-b px-4 py-3"
        >
          <p class="text-md font-semibold">{{ title }}</p>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="xmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="cursor-pointer hover:text-danger svg-inline--fa fa-xmark w-4 h-4"
            @click="handleClose"
          >
            <path
              fill="currentColor"
              d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"
              class=""
            ></path>
          </svg>
        </div>
        <slot />
      </div>
    </div>
    <div class="fixed inset-0 bg-black opacity-50"></div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@/stores/ui';

const modal = useModal();
const { close } = modal;
const props = defineProps<{
  title: string;
  name: string;
}>();
const handleClose = (): void => {
  close();
};
</script>
