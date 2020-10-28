<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-4 sm:my-8">
      <card :to="{ name: 'Manage Questions' }">
        <template #title>Manage Questions</template>
        <template #description>
          Add new questions to existing Assessments
        </template>
        <template #link>Manage Questions</template>
      </card>
    </div>

    <respond-section></respond-section>
  </div>
</template>

<script>
import Card from "@/layouts/Card.vue";
import RespondSection from "@/components/admin/RespondSection.vue";
export default {
  name: "admin",
  components: {
    Card,
    RespondSection,
  },
};
</script>

<style></style>
