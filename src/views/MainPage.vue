<template>
  <h1
    class="mb-4 pt-10 pb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
  >
    Task List
  </h1>
  <RouterLink
    to="/tasks"
    class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
  >
    Show
    <svg
      class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </RouterLink>
</template>

<script>
export default {};
</script>
