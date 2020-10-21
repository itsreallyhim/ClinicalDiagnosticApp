<template>
  <router-link
    :to="menuitem.to"
    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium  rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
    :class="menuitem.active ? 'text-gray-600 bg-gray-100' : 'text-gray-900'"
  >
    <!-- Heroicon name: home -->
    <svg
      class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    {{ menuitem.name }}
  </router-link>
</template>

<script>
export default {
  name: "menu-item",
  props: ["menuitem"],
};
</script>

<style></style>
