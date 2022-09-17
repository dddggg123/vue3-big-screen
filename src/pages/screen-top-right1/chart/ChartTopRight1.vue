<template>
    <mEcharts :options="state.options" :height="state.height" :width="state.width"></mEcharts>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const props = defineProps({
    // 图表数据项
    chartData: {
        type: Object,
        default: {},
        require: true
    }
})
const { chartData } = props;

const chartRef = ref()
// 定义固定配置项
const lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
const state = reactive({
    height: '200px',
    width: '100%',
    options: {
        radar: {
            indicator: chartData.indicatorData,
            shape: "circle",
            splitNumber: 5,
            radius: ["0%", "65%"],
            name: {
                textStyle: {
                    color: "rgb(238, 197, 102)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        "rgba(238, 197, 102, 0.1)",
                        "rgba(238, 197, 102, 0.2)",
                        "rgba(238, 197, 102, 0.4)",
                        "rgba(238, 197, 102, 0.6)",
                        "rgba(238, 197, 102, 0.8)",
                        "rgba(238, 197, 102, 1)"
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(238, 197, 102, 0.5)"
                }
            }
        },
        series: [
            {
                name: "北京",
                type: "radar",
                lineStyle: lineStyle,
                data: chartData.dataBJ,
                symbol: "none",
                itemStyle: {
                    normal: {
                        color: "#F9713C"
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            },
            {
                name: "上海",
                type: "radar",
                lineStyle: lineStyle,
                data: chartData.dataSH,
                symbol: "none",
                itemStyle: {
                    normal: {
                        color: "#B3E4A1"
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            },
            {
                name: "广州",
                type: "radar",
                lineStyle: lineStyle,
                data: chartData.dataGZ,
                symbol: "none",
                itemStyle: {
                    normal: {
                        color: "rgb(238, 197, 102)"
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            }
        ]
    }
})
</script>

<style scoped>

</style>