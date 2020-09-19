<template>
  <div>
    <section class="mb-6">
      <HistoryChart
        :chartdata="chartData"
        :options="chartOptions"
        :styles="{ height: '500px', position: 'relative' }"
      ></HistoryChart>
    </section>
    <section>
      <b-table
        :data="previousAssessment"
        ref="table"
        detailed
        hoverable
        custom-detail-row
        :default-sort="['name', 'asc']"
        detail-key="name"
        @details-open="
          (row, index) => $buefy.toast.open(`Expanded ${row.type}`)
        "
        :show-detail-icon="showDetailIcon"
      >
        <b-table-column
          field="name"
          :visible="columnsVisible['name'].display"
          :label="columnsVisible['name'].title"
          sortable
          v-slot="props"
        >
          <template v-if="showDetailIcon">
            <strong>{{ props.row.type }}</strong>
          </template>
          <template v-else>
            <a @click="toggle(props.row)">
              <strong>{{ props.row.type }}</strong>
            </a>
          </template>
        </b-table-column>

        <b-table-column
          field="score"
          :visible="columnsVisible['score'].display"
          :label="columnsVisible['score'].title"
          sortable
          centered
          v-slot="props"
        >
          {{ pageScore(props.row.results) }}
        </b-table-column>

        <template slot="detail" slot-scope="props">
          <tr v-for="item in props.row.results" :key="item.name">
            <td v-if="showDetailIcon"></td>
            <td v-show="columnsVisible['name'].display">
              <div class="columns">
                <p
                  class="column"
                  :class="item.children ? 'has-text-weight-bold	' : ''"
                >
                  {{ item._title }}
                </p>
                <b-image
                  class="column is-one-third"
                  ratio="16x9"
                  :src="item._image"
                ></b-image>
              </div>
              <div
                class="columns"
                v-for="(child, index) in item.children"
                :key="index"
              >
                <p class="column">
                  {{ child._title }}
                </p>
                <b-image
                  class="column is-one-third"
                  ratio="16x9"
                  :src="child._image"
                ></b-image>
              </div>
            </td>
            <td
              v-show="columnsVisible['score'].display"
              class="has-text-centered"
            >
              <p
                class="column"
                :class="item.children ? 'has-text-weight-bold	' : ''"
              >
                {{ getTotal(item) }}
              </p>

              <p
                class="column "
                v-for="(child, index) in item.children"
                :key="index"
              >
                {{ child._value }}
              </p>
            </td>
          </tr>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
import HistoryChart from "@/components/HistoryChart.vue";

export default {
  components: { HistoryChart },
  name: "PreviousAssessment",
  data: () => {
    return {
      columnsVisible: {
        name: { title: "Name", display: true },

        score: { title: "Score", display: true },
      },
      showDetailIcon: true,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    previousAssessment() {
      return this.$store.getters.previousAssessment;
    },
    chartData() {
      return {
        labels: this.previousAssessment[0].results.map((item) => item._title),
        datasets: [
          {
            label: "CDAT",
            data: this.previousAssessment[0].results.map((item) =>
              this.getAverage(item)
            ),
          },
        ],
      };
    },
  },

  methods: {
    pageScore(results) {
      return results.reduce((result, item) => {
        return (result += this.getTotal(item));
      }, 0);
    },
    getTotal(item) {
      if (item.children) {
        return item.children.reduce((sum, child) => sum + child._value, 0);
      } else {
        return item._value;
      }
    },
    getAverage(item) {
      if (item.children) {
        return (
          item.children.reduce((sum, child) => sum + child._value, 0) /
          item.children.length
        );
      } else {
        return item._value;
      }
    },
    averageScore(results) {
      return Math.round(this.pageScore(results) / results.length);
    },
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
  },
};
</script>
