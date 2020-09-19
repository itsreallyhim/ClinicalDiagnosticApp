<template>
    <section>
        <span class="title has-text-grey is-inline has-text-weight-light">Clinical Diagnostic Assessment</span>
        <span class="title is-3 has-text-weight-bold is-inline"> Joint Condition</span>
        <div class="columns">
            <div class="column">
                <div class="content">
                    <div class="container">
                        <div class="columns has-text-centered">
                            <div class="column is-2">
                                <div class="extreme-text has-text-weight-bold is-size-7">Exceptionally painful</div>
                                <div class="full-height extreme" />
                            </div>
                            <div class="column  is-2">
                                <div class="painful-text has-text-weight-bold is-size-7">Painful</div>
                                <div class="full-height painful" />
                            </div>
                            <div class="column  is-2">
                                <div class="ok-text has-text-weight-bold is-size-7">Twinge</div>
                                <div class="full-height ok" />
                            </div>
                            <div class="column  is-2">
                                <div class="good-text has-text-weight-bold is-size-7">Mostly pain free</div>
                                <div class="full-height good" />
                            </div>
                        </div>

                    </div>
                </div>
                <Question v-model="item.value"
                          v-for="(item, index) in items"
                          :key="index"
                          :question="item" />
            </div>

            <div class="column is-one-quarter" style="height:1vh; position: sticky;">
                <h1 class="title">Total Score {{ pageTotal }} / 150</h1>
            </div>
        </div>

    </section>
</template>

<script>
    import Question from "../components/Question";

    export default {
        components: {
            Question
        },
        data() {
            return {
                items: [
                    {
                        type: "Range",
                        value: null,
                        title: "Lower Back.",
                        description: "Rate the current condition of your lower back",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Upper back.",
                        description: "Rate the current condition of your lower back",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Neck.",
                        description: "Rate the current condition of your neck. ",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right shoulder.",
                        description: "Rate the current condition of your right shoulder.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Left shoulder.",
                        description: "Rate the current condition of your left shoulder.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right wrist.",
                        description: "Rate the current condition of your right wrist and hand.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Left wrist.",
                        description: "Rate the current condition of your left wrist and hand.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right hip.",
                        description: "Rate the current condition of your right hip.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Left hip.",
                        description: "Rate the current condition of your left hip.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right knee.",
                        description: "Rate the current condition of your right knee.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Left knee.",
                        description: "Rate the current condition of your left knee.",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right lower leg.",
                        description: "Rate the current condition of your lower leg, and foot. Do you suffer from shin splints, Achilles tendonitis ...",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Left lower leg.",
                        description: "Rate the current condition of your lower leg, and foot. Do you suffer from shin splints, Achilles tendonitis ...",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right lower leg.",
                        description: "Rate the current condition of your lower leg, and foot. Do you suffer from shin splints, Achilles tendonitis ...",
                    },
                    {
                        type: "Range",
                        value: null,
                        title: "Right foot.",
                        description: "Rate the current condition of your lower leg, and foot. Do you suffer from shin splints, Achilles tendonitis ...",
                    },
                ],
            }
        },
        computed: {
            pageTotal() {
                return this.items.reduce((sum, current) => (sum += current.value), 0);
            },
        },
    };
</script>

<style>
    .full-height {
        height: 0.7em;
    }

    .ok {
        background-color: #f2994a;
    }

    .ok-text {
        color: #f2994a;
    }

    .painful {
        background-color: #eb5757;
    }

    .painful-text {
        color: #eb5757;
    }

    .extreme {
        background-color: #e0e0e0;
    }

    .extreme-text {
        color: #828282;
    }

    .good {
        background-color: #00ebc8;
    }

    .good-text {
        color: #00ebc8;
    }
</style>