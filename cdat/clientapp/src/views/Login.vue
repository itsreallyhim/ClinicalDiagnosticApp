<template>
  <div>
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form @submit.prevent="login()">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-indigo active:bg-blue"
              >
                Log In with Google
              </button>
            </span>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-gray-500 bg-white">
                  No account? Register Here
                </span>
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <router-link
                  :to="{ name: 'Register' }"
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 text-sm font-medium text-indigo-900 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:border-indigo-400 focus:shadow-outline-indigo active:bg-indigo-400"
                >
                  Register
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  methods: mapActions("auth", ["login"]),
};
</script>

<style></style>
