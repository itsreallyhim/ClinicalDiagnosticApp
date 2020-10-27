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
                    required
                    class="block w-full form-input sm:text-sm sm:leading-5"
                    name="title"
                    placeholder="Question Title"
                    autocomplete="false"
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
                    class="block w-full mt-1 form-textarea sm:text-sm sm:leading-5"
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
                    class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
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
                    required
                    name="question_type"
                    id="question_type"
                    v-model="question.question_type"
                    class="block w-full px-3 py-2 mt-1 capitalize bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  >
                    <option
                      :value="question_type"
                      v-for="(question_type, index) in question_types"
                      :key="index"
                      class="capitalize"
                      >{{ question_type }}</option
                    >
                  </select>
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
                  <boolean v-model="isNestedMeta">Nested Meta</boolean>
                  <pre>{{ scale_meta }}</pre>
                  <div class="grid grid-cols-4 gap-4">
                    <div class="col-span-4" v-if="isNestedMeta">
                      <input
                        type="text"
                        name="group_label"
                        id="group_label"
                        class="form-input"
                        placeholder="Group Label"
                        required
                      />
                    </div>

                    <input
                      class="form-input"
                      type="number"
                      name="start"
                      id="start"
                      placeholder="Start"
                      :min="0"
                      :max="11"
                      v-model="temp.start"
                      required
                    />
                    <input
                      class="form-input"
                      type="number"
                      name="end"
                      id="end"
                      placeholder="End"
                      :min="Number.parseInt(temp.start)"
                      :max="11"
                      v-model="temp.end"
                      required
                    />
                    <input
                      class="text-sm form-input"
                      type="text"
                      name="label"
                      id="label"
                      placeholder="Label"
                      v-model="temp.label"
                      required
                    />
                    <select
                      aria-placeholder="Color"
                      name="color"
                      id="color"
                      v-model="temp.color"
                      :class="temp.color ? temp.color : 'bg-white'"
                      class="w-full px-3 py-2 capitalize border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    >
                      <option value="" selected disabled>Colour</option>
                      <option value="bg-orange-400" class="bg-orange-400">
                        Orange
                      </option>
                      <option value="bg-green-400" class="bg-green-400">
                        Green
                      </option>
                      <option value="bg-gray-300" class="bg-gray-300">
                        Gray
                      </option>
                      <option value="bg-red-400" class="bg-red-400">Red</option>
                    </select>
                    <button
                      class="text-sm bg-gray-200 rounded-md"
                      @click.prevent="addScaleMetaOption()"
                    >
                      Add Option
                    </button>
                    <button
                      class="col-start-4 py-2 text-sm bg-gray-300 rounded-md"
                      v-if="isNestedMeta"
                      @click="addScaleMetaGroup()"
                    >
                      New Group
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-3 gap-6 mt-6"
                v-if="
                  question.question_type == 'nested' && questions.length != 0
                "
              >
                <div class="col-span-3 ">
                  <label
                    for="scale_meta"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Nested Questions
                  </label>
                  <pre>{{ nested_questions }}</pre>
                  <div class="grid grid-cols-4 gap-2">
                    <div class="col-span-3">
                      <select
                        name="nested_question"
                        id="nested_question"
                        v-model="temp.nested_question"
                        class="w-full px-3 py-2 mt-1 capitalize bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      >
                        <option
                          :value="question.id"
                          v-for="(question, index) in questions"
                          :key="index"
                          class="capitalize"
                          >{{ question.title }}</option
                        >
                      </select>
                    </div>
                    <button
                      @click.prevent="addNestedQuestion()"
                      :disabled="temp.nested_question == null"
                      class="mt-1 border rounded-md"
                      :class="
                        temp.nested_question == null ? 'cursor-not-allowed' : ''
                      "
                    >
                      Add Question
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  :disabled="saving"
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  {{ !saving ? "Save" : "Saved" }}
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
import Boolean from "@/components/question_type/Boolean.vue";
export default {
  name: "add-questions",
  components: {
    Boolean,
  },
  created() {
    this.loadAssessments();
    this.loadQuestions();
  },
  computed: {
    ...mapGetters("assessments", ["assessments"]),
    ...mapGetters("questions", ["questions"]),
    question_types() {
      let types = [
        "scale-meta",
        "scale",
        "number",
        "percent",
        "kilos",
        "posture",
        "nested",
        "boolean",
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
      question_type: "",
    },
    temp: {
      start: null,
      end: null,
      label: "",
      color: null,
      nested_question: null,
    },
    assessment: null,
    scale_meta: [],
    nested_questions: [],
    response: null,
    saving: false,
    isNestedMeta: false,
  }),
  methods: {
    ...mapActions("assessments", ["loadAssessments"]),
    ...mapActions("questions", ["loadQuestions"]),
    addNestedQuestion() {
      this.nested_questions.push(this.temp.nested_question);
      this.temp.nested_question = null;
    },
    addScaleMetaOption() {
      this.scale_meta.push({
        start: this.temp.start,
        end: this.temp.end,
        label: this.temp.label,
        color: this.temp.color,
      });
      this.temp.start = 0;
      this.temp.end = 11;
      this.temp.label = "";
      this.temp.color = null;
    },
    async handleForm() {
      let insertQ = null;
      if (this.question.question_type == "scale-meta")
        insertQ = { ...this.question, scale_meta: this.scale_meta };
      else if (this.question.question_type == "nested") {
        let nestedRefs = [];
        this.nested_questions.forEach((x) =>
          nestedRefs.push(db.collection("questions").doc(x))
        );
        insertQ = { ...this.question, questions: nestedRefs };
      } else {
        insertQ = this.question;
      }
      let titleHash =
        this.question.title.replace(" ", "") + new Date().getTime();
      console.log(titleHash);
      let newRef = db.collection("questions").doc(titleHash);
      let newQuestion = await newRef.set(insertQ);

      // Add Question to Assessment
      if (this.assessment) {
        //Handle Standard Question
        let assessment = db.collection("assessments").doc(this.assessment);

        console.log(newQuestion);
        let update = await assessment.update({
          questions: firebase.firestore.FieldValue.arrayUnion(newRef),
        });
        this.response = update;
      }
      this.resetForm();
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
        color: null,
        nested_question: null,
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
