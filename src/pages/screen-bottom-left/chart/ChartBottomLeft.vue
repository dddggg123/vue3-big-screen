<template>
    <mEcharts :options="state.options" :height="state.height" :width="state.width"></mEcharts>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    // 图表数据项
    chartData: {
        type: Object,
        default: () => ({}),
    }
})

const {chartData} = props;
const chartRef = ref()
const state = reactive({
    height: '420px',
    width: '100%',
    options: {
        tooltip: {
            show: true,
            trigger: "item",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true,
                    backgroundColor: "#7B7DDC"
                }
            }
        },
        legend: {
            show: true,
        },
        grid: {
            x: "8%",
            width: "88%",
            top: "5%",
            bottom: '7%'
        },
        xAxis: {
            data: [
                "市区",
                "万州",
                "江北",
                "南岸",
                "北碚",
                "綦南",
                "长寿",
                "永川",
                "璧山",
                "江津",
                "城口",
                "大足",
                "垫江",
                "丰都",
                "奉节",
                "合川",
                "江津区",
                "开州",
                "南川",
                "彭水",
                "黔江",
                "石柱",
                "铜梁",
                "潼南",
                "巫山",
                "巫溪",
                "武隆",
                "秀山",
                "酉阳",
                "云阳",
                "忠县",
                "川东",
                "检修"
            ],
            axisLine: {
                lineStyle: {
                    color: "#B4B4B4"
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: [
            {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "#B4B4B4"
                    }
                },

                axisLabel: {
                    formatter: "{value} "
                }
            },
            {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "#B4B4B4"
                    }
                },
                axisLabel: {
                    formatter: "{value} "
                }
            }
        ],
        series: [
            {
                name: "贯通率",
                type: "line",
                smooth: true,
                showAllSymbol: true,
                symbol: "emptyCircle",
                symbolSize: 8,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: "#F02FC2"
                    }
                },
                data: chartData.rateData
            },
            {
                name: "已贯通",
                type: "bar",
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#956FD4" },
                            { offset: 1, color: "#3EACE5" }
                        ])
                    }
                },
                data: chartData.barData
            },
            {
                name: "计划贯通",
                type: "bar",
                barGap: "-100%",
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(156,107,211,0.8)" },
                            { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                            { offset: 1, color: "rgba(156,107,211,0.2)" }
                        ])
                    }
                },
                z: -12,
                data: chartData.lineData
            }
        ]
    }
})
</script>

<style scoped>

</style>