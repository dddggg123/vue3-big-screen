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

const { chartData } = props;
const chartRef = ref()
const state = reactive({
    height: '400px',
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
                "北京",
                "上海",
                "深圳",
                "广州",
                "南京",
                "武汉",
                "成都",
                "郑州",
                "苏州",
                "南昌",
                "长沙",
                "厦门",
                "大连",
                "福州",
                "萧山",
                "洛阳",
                "襄阳",
                "拉萨",
                "乌鲁木齐",
                "包头",
                "鄂尔多斯",
                "哈尔滨",
                "宁波",
                "佛山",
                "汕头",
                "汕尾",
                "珠海",
                "银川",
                "桂林",
                "贵阳",
                "株洲",
                "湘潭",
                "岳阳"
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
                name: "完成率",
                type: "line",
                smooth: true,
                showAllSymbol: true,
                symbol: "emptyCircle",
                symbolSize: 8,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: "#ffdb5c"
                    }
                },
                data: chartData.rateData
            },
            {
                name: "已经销售",
                type: "bar",
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#e7bcf3" },
                            { offset: 1, color: "#3EACE5" }
                        ])
                    }
                },
                data: chartData.barData
            },
            {
                name: "计划销售",
                type: "bar",
                barGap: "-100%",
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(50,197,233,0.8)" },
                            { offset: 0.2, color: "rgba(50,197,233,0.5)" },
                            { offset: 1, color: "rgba(50,197,233,0.2)" }
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