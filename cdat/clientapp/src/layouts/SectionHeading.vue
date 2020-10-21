<template>
  <div class="pb-5 border-b border-gray-200 space-y-2">
    <h3 class="text-xl leading-6 font-medium text-gray-900">
      <slot name="heading"></slot>
    </h3>
    <p class="max-w-4xl text-sm leading-5 text-gray-500">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "section-heading",
  props: {
    level: {
      String,
      default: () => "h1",
    },
  },
};
</script>

<style></style>
