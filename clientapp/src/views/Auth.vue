<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5">
          <div class="box">
            <div class="py-3 has-text-centered">
                <img width="300" height="64" src="@/assets/global-back-care-logo.png" />
                <h1 class="title is-size-4 pt-3">
                  {{ title }}
                </h1>
            </div>

            <router-view @clicked="handleSubmit"></router-view>
            <hr />
            <p class="is-size-7 has-text-centered">
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
