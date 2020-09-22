<template>
  <div>
    <div class="card mb-6" v-for="(item, index) in feed" :key="index">
      <div class="card-content">
        {{ item.message }}
      </div>
      <div class="card-footer">
        <div class="card-footer-item">
          {{ item.name }}
        </div>
        <time :datetime="item.date" class="card-footer-item">
          {{ item.date.toLocaleDateString("en-au") }}
        </time>
        <div class="card-footer-item has-background-primary ">
          <router-link :to="item.action.link" class="has-text-primary-light">
            {{ item.action.message }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      feed: [
        {
          message: "John Miller commented on your CDAT",
          name: "John Miller",
          date: new Date(),
          action: {
            message: "View CDAT",
            link: "/assessment/1234",
          },
        },
        {
          message:
            "Dr Blake has requested that you complete a 10-point Risk Screen",
          name: "Dr Blake",
          date: new Date(),
          action: {
            message: "Complete Assessment",
            link: "/assessment/risk-screen",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
