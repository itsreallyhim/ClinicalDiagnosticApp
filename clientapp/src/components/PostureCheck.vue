<template>
  <section class="">
    <div class="columns">
      <div class="column is-half">
        <img
          src="https://placehold.it/450x450.png"
          alt="Posture Placeholder Image"
          class="imgTemplate"
        />
      </div>

      <div class="column is-half">
        <ImageUpload v-on:image="updateImage" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <h3 class="subtitle has-text-weight-bold	">
          {{ question._params.question }}
        </h3>
        <Range :tags="question._params.tags" v-model="question.value" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <b-field label="Your Comments">
          <b-input
            type="textarea"
            v-model="question.comments"
            placeholder="Provide any comments here."
          ></b-input>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
import ImageUpload from "../components/ImageUpload";
import Range from "@/components/Range";
import { QuestionModel } from "@/models/Question";
export default {
  props: {
    question: {
      QuestionModel,
      required: true,
    },
  },

  components: {
    ImageUpload,
    Range,
  },

  methods: {
    updateImage(image) {
      this.question.image = image;
    },
  },
};
</script>

<style>
.imgTemplate {
  border: 0.1rem solid #bdbdbd;
  border-radius: 0.5rem;
  width: 450px;
}
section {
  max-width: 80%;
}

@media (max-width: 450px) {
  .imgTemplate {
    width: 100%;
    height: auto;
  }
}
</style>
