<template>
    <mEcharts :options="state.options" :height="state.height" :width="state.width"></mEcharts>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, watch } from 'vue';

const props = defineProps({
    // 图表数据项
    chartData: {
        type: Object,
        default: () => (
            {
                year: 0,
                weekCategory: [] as Array<string>,
                radarData: [] as Array<Array<number>>,
                radarDataAvg: [] as Array<Array<number>>,
                maxData: 12000,
                weekMaxData: [] as Array<number>,
                weekLineData: [] as Array<number>
            }
        ),
    }
})

const { chartData } = props;
const chartRef = ref()
// 定义颜色
const colorList = {
    linearYtoG: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: "#f5b44d"
            },
            {
                offset: 1,
                color: "#28f8de"
            }
        ]
    },
    linearGtoB: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: "#43dfa2"
            },
            {
                offset: 1,
                color: "#28f8de"
            }
        ]
    },
    linearBtoG: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: "#1c98e8"
            },
            {
                offset: 1,
                color: "#28f8de"
            }
        ]
    },
    areaBtoG: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: "rgba(35,184,210,.2)"
            },
            {
                offset: 1,
                color: "rgba(35,184,210,0)"
            }
        ]
    }
}
const state = reactive({
    height: '450px',
    width: '100%',
    options: {
        title: {
            text: "",
            textStyle: {
                color: "#D3D6DD",
                fontSize: 24,
                fontWeight: "normal"
            },
            subtext: chartData.year + "/" + chartData.weekCategory[6],
            subtextStyle: {
                color: "#fff",
                fontSize: 16
            },
            top: 50,
            left: 80
        },
        legend: {
            top: 120,
            left: 80,
            orient: "vertical",
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ["线下销售", "线上零售"],
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        },
        tooltip: {
            trigger: "item"
        },
        radar: {
            center: ["68%", "27%"],
            radius: "40%",
            name: {
                color: "#fff"
            },
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: colorList.linearYtoG,
                    opacity: 0.6
                }
            },
            splitLine: {
                lineStyle: {
                    color: colorList.linearYtoG,
                    opacity: 0.6
                }
            },
            splitArea: {
                areaStyle: {
                    color: "#fff",
                    opacity: 0.1,
                    shadowBlur: 25,
                    shadowColor: "#000",
                    shadowOffsetX: 0,
                    shadowOffsetY: 5
                }
            },
            indicator: [
                {
                    name: "线下销售",
                    max: chartData.maxData
                },
                {
                    name: "线上零售",
                    max: 10
                },
                {
                    name: "朋友推荐",
                    max: 12
                },
                {
                    name: "官网搜索",
                    max: 3.5
                }
            ]
        },
        grid: {
            left: 90,
            right: 80,
            bottom: '15%',
            top: "50%"
        },
        xAxis: {
            type: "category",
            position: "bottom",
            axisLine: true,
            axisLabel: {
                color: "rgba(255,255,255,.8)",
                fontSize: 12
            },
            data: chartData.weekCategory
        },
        // 下方Y轴
        yAxis: {
            name: "辆",
            nameLocation: "end",
            nameGap: 24,
            nameTextStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 14
            },
            max: chartData.maxData,
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#fff",
                    opacity: 0.1
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,.8)",
                fontSize: 12
            }
        },
        series: [
            {
                name: "",
                type: "radar",
                symbolSize: 0,
                data: [
                    {
                        value: chartData.radarDataAvg[6],
                        name: "线下销售",
                        itemStyle: {
                            normal: {
                                color: "#f8d351"
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: "#f8d351",
                                shadowBlur: 25,
                                shadowColor: "rgba(248,211,81,.3)",
                                shadowOffsetX: 0,
                                shadowOffsetY: -10,
                                opacity: 1
                            }
                        }
                    },
                    {
                        value: chartData.radarData[6],
                        name: "线上零售",
                        itemStyle: {
                            normal: {
                                color: "#43dfa2"
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: colorList.linearGtoB,
                                shadowBlur: 15,
                                shadowColor: "rgba(0,0,0,.2)",
                                shadowOffsetX: 0,
                                shadowOffsetY: 5,
                                opacity: 0.8
                            }
                        }
                    }
                ]
            },
            {
                name: "",
                type: "line",
                smooth: true,
                symbol: "emptyCircle",
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: "#fff"
                    }
                },
                lineStyle: {
                    normal: {
                        color: colorList.linearBtoG,
                        width: 3
                    }
                },
                areaStyle: {
                    normal: {
                        color: colorList.areaBtoG
                    }
                },
                data: chartData.weekLineData,
                lineSmooth: true,
                markLine: {
                    silent: true,
                    data: [
                        {
                            type: "average",
                            name: "平均值"
                        }
                    ],
                    precision: 0,
                    label: {
                        normal: {
                            formatter: "平均值: \n {c}"
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(248,211,81,.7)"
                        }
                    }
                },
                tooltip: {
                    position: "top",
                    formatter: "{c} m",
                    backgroundColor: "rgba(28,152,232,.2)",
                    padding: 6
                }
            },
            {
                name: "占位背景",
                type: "bar",
                itemStyle: {
                    normal: {
                        show: true,
                        color: "#000",
                        opacity: 0
                    }
                },
                silent: true,
                barWidth: "50%",
                data: chartData.weekMaxData,
                animation: false
            }
        ]
    }
})

watch(() => props.chartData, (val: any) => {
    state.options.title.subtext = val.year + "/" + val.weekCategory[6];
    state.options.radar.indicator[0].max = val.maxData;
    state.options.xAxis.data = val.weekCategory;
    state.options.yAxis.max = val.maxData;
    state.options.series[0].data[0].value = val.radarDataAvg[6];
    state.options.series[0].data[1].value = val.radarData[6];
    state.options.series[1].data = val.weekLineData;
    state.options.series[2].data = val.weekMaxData;
    }, {
        immediate: true,
        deep: true
    })

</script>

<style scoped>

</style>