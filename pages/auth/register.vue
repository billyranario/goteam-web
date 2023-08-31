<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white"
    >
      Create your account
    </h1>
    <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >Full Name</label
        >
        <input
          v-model="state.form.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        />
        <p
          v-if="state.form.errors.has('name')"
          class="mt-2 text-xs text-red-600 light:text-red-400"
        >
          <span class="font-medium">{{ state.form.errors.get('name') }}</span>
        </p>
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >Email</label
        >
        <input
          v-model="state.form.email"
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        />
        <p
          v-if="state.form.errors.has('email')"
          class="mt-2 text-xs text-red-600 light:text-red-400"
        >
          <span class="font-medium">{{ state.form.errors.get('email') }}</span>
        </p>
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >Password</label
        >
        <input
          v-model="state.form.password"
          type="password"
          name="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        />
        <p
          v-if="state.form.errors.has('password')"
          class="mt-2 text-xs text-red-600 light:text-red-400"
        >
          <span class="font-medium">{{
            state.form.errors.get('password')
          }}</span>
        </p>
      </div>
      <div>
        <label
          for="password_confirmation"
          class="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >Confirm Password</label
        >
        <input
          v-model="state.form.password_confirmation"
          type="password"
          id="password_confirmation"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        />
        <p
          v-if="state.form.errors.has('password_confirmation')"
          class="mt-2 text-xs text-red-600 light:text-red-400"
        >
          <span class="font-medium">{{
            state.form.errors.get('password_confirmation')
          }}</span>
        </p>
      </div>
      <UiButton type="submit" :loading="state.loading"> Sign in </UiButton>
      <p class="text-sm font-light text-gray-500 light:text-gray-400">
        Already have an account?
        <NuxtLink
          class="font-medium text-primary-600 hover:underline light:text-primary-500"
          :to="{ name: 'auth-login' }"
          >Sign in
        </NuxtLink>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import { useToaster } from '@/stores/ui';

definePageMeta({
  layout: 'authentication',
});

const auth = useAuth();
const router = useRouter();
const toaster = useToaster();
const { setToken } = auth;
const { openToaster } = toaster;
const { $vForm } = useNuxtApp();

const state = reactive({
  loading: false,
  form: $vForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }),
});

const submit = async () => {
  state.loading = true;
  try {
    await state.form.post('/auth/register');
    router.push({ name: 'auth-login' });
  } catch (error: any) {
    const { response } = error;
    const { data } = response;

    state.loading = false;
    openToaster({
      type: 'error',
      message: data?.error ?? 'Please correct the required fields.',
    });
  }
};
</script>
