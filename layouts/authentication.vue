<template>
  <section class="bg-gray-50 light:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 light:text-white"
      >
        GoTeam Task Management
      </a>
      <div
        class="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700"
      >
        <slot />
      </div>
    </div>
  </section>
</template>
