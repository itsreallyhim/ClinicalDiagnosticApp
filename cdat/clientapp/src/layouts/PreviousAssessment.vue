<template>
  <li>
    <div class="block">
      <div class="px-4 py-4 flex items-center sm:px-6">
        <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
              <slot name="title"></slot>
              <span class="ml-1 font-normal text-gray-500">
                <slot name="description"></slot>
              </span>
            </div>
            <div class="mt-2 flex">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <span>
                  <slot name="date"></slot>
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 flex-shrink-0 sm:mt-0">
            <div class="flex overflow-hidden">
              <span
                class="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              >
                <slot name="result"></slot>
              </span>
            </div>
          </div>
        </div>
        <button
          @click="show = !show"
          class="ml-5 p-4 flex-shrink-0 bg-gray-100 rounded-full  hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <!-- Heroicon name: chevron-right -->
          <svg
            :class="show ? ' -rotate-90' : 'rotate-90'"
            class="h-5 w-5 text-gray-400 transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div v-if="show" class="">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Question
                      </th>
                      <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                      v-for="(response, index) in previousAssessment.responses"
                      :key="index"
                    >
                      <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                      >
                        {{ response.question.title }}
                      </td>
                      <td class="px-6 py-4  text-sm leading-5 text-gray-500">
                        {{ response.question.description }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                      >
                        {{ response.answer }}/10
                      </td>
                    </tr>

                    <!-- More rows... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "previous-assessment",
  props: {
    to: {
      String,
      default: () => "/profile/previous-assessments",
    },
    previousAssessment: {
      Object,
      default: () => null,
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style></style>
