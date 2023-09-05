<template>
  <button :type="type" :disabled="loading" :class="classes">
    <span v-if="loading" class="mr-2"
      ><i class="fas fa-spinner fa-spin"></i
    ></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'button' | 'submit' | 'reset';
  loading: boolean;
  class?: string;
}>();

const type = ref(props.type || 'button');
const classes = ref(
  props.class ||
    'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800',
);
</script>
