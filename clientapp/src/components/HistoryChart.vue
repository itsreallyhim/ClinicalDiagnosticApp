<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  name: "HistoryChart",
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
