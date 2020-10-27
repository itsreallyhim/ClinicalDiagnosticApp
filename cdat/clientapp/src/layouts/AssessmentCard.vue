<template>
  <div
    class="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow"
  >
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-shrink-0 hidden mr-5">
          <!-- Heroicon name: scale -->
          <svg
            class="w-6 h-6 text-cool-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
        </div>
        <div class="flex-1 w-0 ">
          <dl>
            <dt class="font-medium leading-7 text-cool-gray-900">
              <router-link :to="to">
                {{ assessment.title }}
              </router-link>
            </dt>
            <dd>
              <div class="font-light leading-5 text-cool-gray-500">
                {{ assessment.excerpt }}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="px-5 py-3 bg-cool-gray-50">
      <div class="text-sm leading-5">
        <router-link
          :to="to"
          class="font-medium transition duration-150 ease-in-out text-blue hover:text-blue"
        >
          View Assessment
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssessmentCard",
  props: {
    to: {
      String,
      default: () => "/assessments",
    },
    assessment: {
      Object,
      default: () => ({
        title: "Default Assessment",
        description: "Default Description",
      }),
    },
  },
};
</script>

<style></style>
