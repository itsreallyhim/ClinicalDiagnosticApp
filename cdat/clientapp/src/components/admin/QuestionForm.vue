<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Add Questions
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-600">
            Add questions to an existing assessment.
          </p>
          <p class="mt-1 text-sm leading-5 text-gray-600">
            <strong>Note:</strong> To create a nested question:
          </p>
          <ol class="ml-6 text-sm text-gray-600 list-decimal">
            <li>
              Create the nested questions, not linked to any assessment.
              <button
                class="px-3 py-1 text-xs font-semibold bg-white rounded-sm shadow-xs"
                @click="assessment = null"
              >
                Clear Current Assessment
              </button>
            </li>
            <li>
              Create a new question linked to an assessment, and set the type as
              'Nested'
            </li>
            <li>Select the relevant questions and click 'Save'</li>
          </ol>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="handleForm">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="title">Title</label>

                  <input
                    v-model="question.title"
                    id="title"
                    class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    name="title"
                    placeholder="Question Title"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="description"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Description
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    v-model="question.description"
                    id="description"
                    rows="3"
                    class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                    placeholder="Question Description"
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Enter the description of the question.
                </p>
              </div>

              <div class="grid grid-cols-3 gap-6 mt-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="assessment"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Assessment
                  </label>
                  <select
                    v-model="assessment"
                    name="assessment"
                    id="assessment"
                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  >
                    <option
                      :value="assessment.id"
                      v-for="(assessment, index) in assessments"
                      :key="index"
                      >{{ assessment.title }}</option
                    >
                  </select>

                  <div class="text-sm" v-if="selectedAssessment != null">
                    <h4 class="font-semibold">Current Questions</h4>
                    <ul>
                      <li
                        v-for="(questionItem, index) in selectedAssessment"
                        :key="'q' + index"
                      >
                        {{ questionItem.title }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-6 mt-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="question_type"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Question Type
                  </label>
                  <select
                    name="question_type"
                    id="question_type"
                    v-model="question.question_type"
                    class="block w-full px-3 py-2 mt-1 capitalize transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  >
                    <option
                      :value="question_type"
                      v-for="(question_type, index) in question_types"
                      :key="index"
                      class="capitalize"
                      >{{ question_type }}</option
                    ></select
                  >
                </div>
              </div>

              <div
                class="grid grid-cols-3 gap-6 mt-6"
                v-if="question.question_type == 'scale-meta'"
              >
                <div class="col-span-3 ">
                  <label
                    for="scale_meta"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Scale Meta
                  </label>
                  <div>
                    {{ scale_meta }}
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <input
                      class="form-input"
                      type="number"
                      name="start"
                      id="start"
                      placeholder="Start"
                      :min="0"
                      :max="11"
                      v-model="temp.start"
                    />
                    <input
                      class="form-input"
                      type="number"
                      name="end"
                      id="end"
                      placeholder="End"
                      :min="Number.parseInt(temp.start) + 1"
                      :max="11"
                      v-model="temp.end"
                    />
                    <input
                      class="form-input"
                      type="text"
                      name="label"
                      id="label"
                      placeholder="Label"
                      v-model="temp.label"
                    />
                    <button @click.prevent="addScaleMetaOption()">
                      Add Option
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Save
                </button>
              </span>
            </div>

            <pre>
                {{ response }}
            </pre>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db";
import firebase from "@/firebase";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "add-questions",
  created() {
    this.loadAssessments();
    this.loadQuestions();
  },
  computed: {
    ...mapGetters("assessments", ["assessments"]),
    ...mapGetters("questions", ["getQuestions"]),
    question_types() {
      let types = [
        "scale-meta",
        "scale",
        "number",
        "percent",
        "kilos",
        "posture",
        "nested",
      ];

      return types;

      /*  TODO: Load Types from existing question types
      if (this.assessments != null) {
        this.assessments.forEach((assessment) => {
          if ("questions" in assessment) {
            assessment.questions.forEach((question) =>
              types.push(question.question_type)
            );
          }
        });
      }
      return types.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      */
    },
    selectedAssessment() {
      if (this.assessment != null) {
        return this.assessments.find((x) => x.id == this.assessment).questions;
      } else {
        return null;
      }
    },
  },
  data: () => ({
    question: {
      title: "",
      description: "",
      question_type: null,
    },
    temp: {
      start: 0,
      end: 11,
      label: "",
    },
    assessment: null,
    scale_meta: [],
    nested_questions: [],
    response: null,
  }),
  methods: {
    ...mapActions("assessments", ["loadAssessments"]),
    ...mapActions("questions", ["loadQuestions"]),
    addScaleMetaOption() {
      this.scale_meta.push(this.temp);
      this.temp = {
        start: 0,
        end: 11,
        label: "",
      };
    },
    async handleForm() {
      let assessment = db.collection("assessments").doc(this.assessment);

      let insertQ =
        this.question.question_type == "scale_meta"
          ? { ...this.question, scale_meta: this.scale_meta }
          : this.question;

      let newQuestion = await db.collection("questions").add(insertQ);

      let update = await assessment.update({
        questions: firebase.firestore.FieldValue.arrayUnion(newQuestion),
      });
      this.resetForm();
      this.response = update;
    },
    resetForm() {
      this.question = {
        title: "",
        description: "",
        question_type: null,
      };
      this.temp = {
        start: 0,
        end: 11,
        label: "",
      };
      this.assessment = null;
      this.scale_meta = [];
      this.nested_questions = [];
      this.response = null;
    },
  },
};
</script>

<style></style>
