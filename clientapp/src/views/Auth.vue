<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5">
          <div class="box">
            <h1 class="title">
              {{ title }}
            </h1>

            <router-view  @clicked="handleSubmit"></router-view>

            <p class="is-size-7">
              Use of this application is in accordance to our Privacy Policy and Terms
              of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="false" v-model="isLoading"></b-loading>
  </section>
</template>

<script>
  export default {
    name: "Auth",
    data() {
      return {
        isLoading: false
      }
    },
    computed: {
      title() {
        return this.$route.name || "Auth";
      },
    },
    methods: {
      handleSubmit(value) {
        this.isLoading = value;
      }
    }
  };
</script>

<style></style>
