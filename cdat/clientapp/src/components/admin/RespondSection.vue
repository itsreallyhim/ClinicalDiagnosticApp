<template>
  <div>
    <h2>Respond to assessment</h2>

    <div
      v-for="(response, index) in responses"
      :key="index"
      class="pb-4 my-16 border rounded-md"
    >
      <div class="grid grid-cols-4 gap-4 ">
        <div class="col-span-4 p-4 bg-white rounded-tr-md rounded-tl-md">
          <h4 class="text-lg font-semibold">
            {{ response.assessment.title }}
          </h4>
          <p>
            Completed:
            {{ response.created_at.toDate().toLocaleString("en-au") }}
          </p>
        </div>
        <div class="col-span-1 pl-4">
          <static-card v-if="response.owner">
            <template #icon> </template>
            <template #title>{{ response.owner.displayName }}</template>
            <template #description v-if="response.owner.profile != null">
              <p class="capitalize">{{ response.owner.profile.role }}</p>
              <p class="text-sm">
                {{
                  response.owner.profile
                    ? response.owner.profile.contactNumber
                    : ""
                }}
              </p>
              <p class="text-sm">{{ response.owner.email }}</p>
              <h3 class="mt-3 font-semibold">Health Information</h3>
              <p>
                Date of Birth:
                {{
                  response.owner.profile
                    ? response.owner.profile.dateOfBirth
                    : ""
                }}
              </p>
              <p>
                Gender:
                {{
                  response.owner.profile ? response.owner.profile.gender : ""
                }}
              </p>
              <p>
                Height:
                {{
                  response.owner.profile ? response.owner.profile.height : ""
                }}cms
              </p>
              <p>
                Weight:
                {{
                  response.owner.profile ? response.owner.profile.kilos : ""
                }}kgs
              </p>
              <p>
                Body Fat Percentage:
                {{ response.owner.profile ? response.owner.profile.bfp : "" }}%
              </p>
            </template>
            <template #description v-else>
              No Profile Information
            </template>
            <template #link></template>
          </static-card>
        </div>

        <div class="col-span-3 mr-4 bg-white rounded-md shadow-sm">
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
                  Answer
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                >
                  Comments
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="(answer, index) in response.responses"
                :key="index"
                class="min-w-full "
              >
                <td class="pl-4">
                  <p>
                    {{ answer.question.title }}
                  </p>
                </td>
                <td>
                  {{ answer.answer }}
                  <div></div>
                </td>
                <td class="py-2 pr-2">
                  <textarea
                    id=""
                    :placeholder="
                      `Comments for ${response.id}-${answer.question.id}`
                    "
                    class="w-full form-textarea"
                  ></textarea>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="pt-2">
                  <button
                    class="inline-flex justify-center float-right px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-blue active:bg-blue"
                  >
                    Save Comments
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as genUUID } from "uuid";
import { mapActions, mapGetters } from "vuex";
import StaticCard from "@/layouts/StaticCard.vue";
export default {
  name: "respond-section",
  components: {
    StaticCard,
  },
  mounted() {
    this.loadResponses();
  },
  methods: {
    ...mapActions("responses", ["loadResponses"]),
    ...mapActions("comments", ["loadComments"]),
    uuid() {
      return genUUID();
    },
  },
  computed: {
    ...mapGetters("responses", ["responses"]),
    ...mapGetters("comments", ["comments"]),
  },
};
</script>

<style></style>
