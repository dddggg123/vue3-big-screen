<template>
    <mEcharts :options="state.options" :height="state.height" :width="state.width"></mEcharts>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
const chartRef = ref()
const props = defineProps({
    // 图表数据项
    chartData: {
        type: Object,
        default: {},
        require: true
    }
})
const { chartData } = props;
const state = reactive({
    height: '220px',
    width: '260px',
    options: {
        color: [
            '#37a2da',
            '#32c5e9',
            '#9fe6b8',
            '#ffdb5c',
            '#ff9f7f',
            '#fb7293',
            '#e7bcf3',
            '#8378ea'
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
            show: true
        },
        calculable: true,
        legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: chartData.titleArr,
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '销量占比',
                type: 'pie',
                radius: [10, 50],
                roseType: 'area',
                center: ['50%', '40%'],
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: true,
                    color: "#fff",
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
                data: chartData.dataArr
            }
        ]
    }
})

watch(() => props.chartData, (val: any) => {
    state.options.legend.data = val.titleArr;
    state.options.series[0].data = val.dataArr;
    }, {
        immediate: true,
        deep: true
    })
</script>

<style scoped>

</style>