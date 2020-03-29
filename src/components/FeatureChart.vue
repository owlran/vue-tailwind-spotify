<template>
  <div class="container">
    <canvas ref="canvas" width="500" height="400"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['features'],
  methods: {
    createDataset() {
      const dataset = {};
      const properties = [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'speechiness',
        'valence',
      ];
      const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

      properties.forEach((prop) => {
        dataset[prop] = this.features.length
          ? avg(this.features.map((feat) => feat && feat[prop]))
          : this.features[prop];
      });
      return dataset;
    },
    createChartConfig(dataset) {
      const labels = Object.keys(dataset);
      const data = Object.values(dataset);

      const charConfig = {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: '',
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(104, 132, 245, 0.3)',
                'rgba(153, 102, 255, 0.3)',
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(104, 132, 245, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          title: {
            display: true,
            text: 'Audio Features',
            fontSize: 18,
            fontFamily: 'Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif',
            fontColor: '#ffffff',
            padding: 30,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                ticks: {
                  fontFamily: 'Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 12,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                ticks: {
                  beginAtZero: true,
                  fontFamily: 'Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 12,
                },
              },
            ],
          },
        },
      };
      return charConfig;
    },
  },
  mounted() {
    const dataset = this.createDataset(this.features);
    const charConfig = this.createChartConfig(dataset);
    const { data, options } = charConfig;
    this.renderChart(data, options);
  },
};
</script>
