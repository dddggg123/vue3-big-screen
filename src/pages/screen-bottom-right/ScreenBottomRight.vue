<template>
    <div class="screen-bottom-right">
        <div class="screen-bottom-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-chart-line" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">本周销量统计</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
        <div class="screen-bottom-chart">
            <Chart :chart-data="chartData"></Chart>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import Chart from './chart/ChartBottomRight.vue';

const intervalInstance = ref(0)
const chartData = reactive({
    year: 0,
    weekCategory: [] as Array<string>,
    radarData: [] as Array<Array<number>>,
    radarDataAvg: [] as Array<Array<number>>,
    maxData: 12000,
    weekMaxData: [] as Array<number>,
    weekLineData: [] as Array<number>
})

// methods
const confirmChartData = () => {
    // 清空轮询数据
    chartData.weekCategory = [];
    chartData.weekMaxData = [];
    chartData.weekLineData = [];
    chartData.radarData = [];
    chartData.radarDataAvg = [];

    const dateBase = new Date();
    chartData.year = dateBase.getFullYear();
    // 周数据
    for (let i = 0; i < 7; i++) {
        // 日期
        const date = new Date();
        chartData.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join("/"));

        // 折线图数据
        chartData.weekMaxData.push(chartData.maxData);
        const distance = Math.round(Math.random() * 7000 + 500);
        chartData.weekLineData.push(distance);

        // 雷达图数据
        // 我的指标
        const averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
        const maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2);
        const hour = +(distance / 1000 / averageSpeed).toFixed(1);
        const radarDayData = [distance, averageSpeed, maxSpeed, hour];
        chartData.radarData.unshift(radarDayData);

        // 平均指标
        const distanceAvg = Math.round(Math.random() * 8000 + 4000);
        const averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
        const maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2);
        const hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
        const radarDayDataAvg = [
            distanceAvg,
            averageSpeedAvg,
            maxSpeedAvg,
            hourAvg
        ];
        chartData.radarDataAvg.unshift(radarDayDataAvg);
    }

}

// 定时函数
const startTimeInterval = () => {
    confirmChartData();
    intervalInstance.value = window.setInterval(() => {
        confirmChartData();
    }, 3000);
}

// 生命周期
onMounted(() => {
    startTimeInterval()
})

onUnmounted(() => {
    window.clearInterval(intervalInstance.value)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-bottom-right {
    height: $box-height7;
    // width: $box-width3;
    background-color: $theme-sub-color;
    margin: 5px;
    border-radius: 10px;

    .screen-bottom-header {
        height: $chart-header-height;

        .header-left {
            width: 40px;
        }

        .header-right {
            width: calc(100% - 40px);

            .header-title {
                color: #fff;
                font-size: $sm-font-size;
            }

            .dv-dec-3 {
                width: 50px;
                height: 20px;
                margin-left: 10px;
            }
        }
    }
}
</style>