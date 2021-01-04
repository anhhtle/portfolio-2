<script>
import { Radar } from 'vue-chartjs';

export default {
    extends: Radar,
    props: ['datasets', 'update', 'labels'],
    data() {
        return {
            datacollection: {
                labels: [],
                datasets: [],
            },
            options: {
                chartArea: { backgroundColor: '#fff' },
                responsive: true,
                maintainAspectRatio: false,
                scale: { 
                    gridLines: { color: '#fff' },
                    angleLines: { color: '#fff' },
                    pointLabels: {
                        fontColor: '#fff',
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                    }
                },
                legend: {
                    display: false,
                    position: 'bottom',
                }
            },
        }
    },
    watch: {
        update: {
            handler: function(val) {
                if (val) {
                    this.updateChart();
                }
            },
            deep: true
        },
    },
    methods: {
        updateChart() {
            this.$data._chart.update()
        },
        render: function() {
            this.datacollection.labels = this.labels;
            this.datacollection.datasets = this.datasets;
            this.renderChart(this.datacollection, this.options);
        }
    },
    mounted () {
        // this.addPlugin({
        //     id: 'background-color-plugin',
        //     beforeDraw: function (chart) {
        //         const { ctx, scale, config } = chart
        //         const { xCenter, yCenter, drawingArea: radius } = scale

        //         ctx.save()
        //         ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2)
        //         ctx.fillStyle = config.options.chartArea.backgroundColor
        //         ctx.fill()
        //         ctx.restore()
        //     }
        // });

        this.render();
    }
}
</script>