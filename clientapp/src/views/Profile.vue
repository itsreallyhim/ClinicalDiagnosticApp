<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="panel">
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4 mb-0">{{ profile.name }}</p>
                <time :datetime="profile.dateOfBirth" class="subtitle is-6">
                  {{ profile.dateOfBirth.toLocaleDateString("en-au") }}
                </time>
              </div>
            </div>
          </div>
          <dl class="panel-block columns">
            <dt class="column is-one-third">Email</dt>
            <dd class="column">{{ profile.email }}</dd>
          </dl>
        </div>

        <b-menu class="mt-4">
          <b-menu-list label="Profile">
            <b-menu-item
              tag="router-link"
              :to="{ path: '/profile/history' }"
              :active="this.$route.name == 'History'"
            >
              <template slot="label">History</template>
            </b-menu-item>
            <b-menu-item
              :active="this.$route.name == 'My Account'"
              tag="router-link"
              :to="{ path: '/profile/account' }"
            >
              <template slot="label">My Account</template>
            </b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
      <div class="column is-two-thirds has-background-light	p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style></style>
