<template>
  <li :class="show ? 'mb-16' : ''" class="bg-white">
    <div class="block">
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="text-sm font-medium leading-5 text-blue ">
              <slot name="title"></slot>
              <p class="mr-2 font-normal text-gray-500">
                <slot name="description"></slot>
              </p>
            </div>
            <div class="flex mt-2">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <span>
                  <slot name="date"></slot>
                </span>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 mt-4 sm:mt-0">
            <div class="flex overflow-hidden">
              <span
                class="inline-flex px-2 text-lg font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
              >
                <slot name="result"></slot>
              </span>
            </div>
          </div>
        </div>
        <button
          @click="show = !show"
          class="flex-shrink-0 p-4 ml-5 transition duration-150 ease-in-out bg-gray-100 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
        >
          <!-- Heroicon name: chevron-right -->
          <svg
            :class="show ? ' -rotate-90' : 'rotate-90'"
            class="w-5 h-5 text-gray-400 transform"
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
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                      >
                        Question
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                      >
                        Description
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
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
                        class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 "
                      >
                        {{ response.question.title }}
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500">
                        <div
                          v-if="response.question.question_type == 'posture'"
                          class="grid gap-4 sm:grid-cols-2"
                        >
                          <img
                            :src="images[response.image]"
                            :alt="response.image"
                          />
                          <div>
                            {{ response.question.description }}
                          </div>
                        </div>
                        <div v-else>
                          {{ response.question.description }}
                        </div>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 ">
                        {{ response.answer }}<span>{{ append(response) }}</span>
                      </td>
                    </tr>
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
import storage from "@/storage";
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
    images: {},
  }),

  created() {
    this.previousAssessment.responses.forEach((element) => {
      if ("image" in element) {
        //console.log("image", element.image);
        this.getImage(element.image);
      }
    });
  },
  methods: {
    append(response) {
      let append = "";

      switch (response.question.question_type) {
        case "kilos":
          append = "kg";
          break;
        case "percent":
          append = "%";
          break;
        case "scale":
        case "scale-meta":
        case "custom-scale":
        case "custom-scale-meta":
          append = "/10";
          break;
        case "number":
        default:
          append = "";
          break;
      }
      return append;
    },
    getImage(imagePath) {
      console.log("path", imagePath);
      if (imagePath != undefined) {
        let imageRef = storage.child(imagePath);

        imageRef.getDownloadURL().then((url) => (this.images[imagePath] = url));
      }
    },
  },
};
</script>

<style></style>
