<template>
  <div>
    {{ assessments }}
  </div>
</template>

<script>
export default {
  name: "Assessments",
  data: () => ({
    assessments: [],
  }),
  firestore: {
    assessments: db.collection("assessments"),
  },
};
</script>

<style></style>
