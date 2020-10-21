<template>
  <div>
    <textarea
      class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      name="text"
      id="text"
      v-model="textVal"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "text-response",
  props: {
    text: {
      String,
      default: () => "",
    },
  },
  data: () => ({
    textVal: "",
  }),
  model: {
    prop: "text",
    event: "change",
  },
};
</script>

<style></style>
