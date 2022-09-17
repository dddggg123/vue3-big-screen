<template>
    <mEcharts :options="state.options" :height="state.height" :width="state.width"></mEcharts>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const chartRef = ref()
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
            data: ['理想ONE', '哪吒V', '零跑TO3', '问界M5', '零跑C11', '小鹏P7'],
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
                data: [
                    { value: 11496, name: '理想ONE' },
                    { value: 7884, name: '哪吒V' },
                    { value: 5724, name: '零跑TO3' },
                    { value: 5033, name: '问界M5' },
                    { value: 4345, name: '零跑C11' },
                    { value: 4224, name: '小鹏P7' },
                ]
            }
        ]
    }
})
</script>

<style scoped>

</style>