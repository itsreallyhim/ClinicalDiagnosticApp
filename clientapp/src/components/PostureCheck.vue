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
        <h3 class="subtitle">Rate your posture</h3>
        <Range v-model="rangeValue" />
      </div>
    </div>
  </section>
</template>

<script>
import ImageUpload from "../components/ImageUpload";
import Range from "@/components/Range";

export default {
  data() {
    return {
      rangeValue: null,
      image: null,
    };
  },
  components: {
    ImageUpload,
    Range,
  },
  watch: {
    rangeValue: function() {
      this.$emit("input", this.rangeValue);
    },
    image() {
      this.$emit("image", this.image);
    },
  },
  methods: {
    updateImage(image) {
      this.image = image;
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

@media (max-width: 450px) {
  .imgTemplate {
    width: 100%;
    height: auto;
  }
}
</style>
