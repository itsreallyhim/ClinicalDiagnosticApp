<template>
    <section class="section">
        <div class="container">
            <div class="column is-5">
                <div class="box">
                    <h1 class="title">
                        {{ title }}
                    </h1>

                    <router-view></router-view>

                    <p class="is-size-7">
                        Use of this application is in accordance to our Privacy Policy and Terms
                        of Use.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Auth",
        computed: {
            title() {
                return this.$route.name || "Auth";
            },
        },
    };
</script>

<style></style>
