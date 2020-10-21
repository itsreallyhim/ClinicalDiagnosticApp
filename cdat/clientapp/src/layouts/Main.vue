<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div :class="show ? '' : 'hidden'" class="md:hidden">
      <div class="fixed inset-0 flex z-40">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              @click="show = !show"
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="@/assets/global-back-care-logo.png"
                alt="Global Back Care"
              />
            </div>
            <nav class="mt-5 px-2 space-y-1">
              <slot name="menu"></slot>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div href="#" class="flex-shrink-0 group block focus:outline-none">
              <div class="flex items-center">
                <div class="ml-3">
                  <router-link
                    :to="{ name: 'Profile' }"
                    v-if="isLoggedIn"
                    class="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900"
                  >
                    {{ user.displayName }}
                  </router-link>
                  <div
                    class="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150"
                  >
                    <slot name="login"> </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-14 z-30" @click="show = !show">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto"
                src="@/assets/global-back-care-logo.png"
                alt="Global Back Care"
              />
            </div>
            <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
              <slot name="menu"></slot>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div class="flex-shrink-0 w-full group block">
              <div class="flex items-center">
                <div class="ml-3">
                  <p
                    class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900"
                  >
                    <slot name="user"></slot>
                  </p>
                  <div
                    class="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150"
                  >
                    <slot name="login"> </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
          @click="show = !show"
        >
          <!-- Heroicon name: menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div
            class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
            :class="pagetitle == 'Home' ? 'hidden' : ''"
          >
            <h1 class="text-2xl font-semibold text-gray-900">
              <slot name="pagetitle">{{ pagetitle }}</slot>
            </h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <slot></slot>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "main-view",

  computed: {
    pagetitle() {
      return this.$route.name;
    },
    ...mapGetters("auth", ["user", "isLoggedIn"]),
  },
  data: () => ({
    show: false,
  }),
  watch: {
    $route: function() {
      this.show = false;
    },
  },
};
</script>
