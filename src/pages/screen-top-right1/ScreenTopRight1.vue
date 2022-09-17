<template>
    <div class="screen-top-right1">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-rank" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">销量渠道分析</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
        <div class="screen-top-chart">
            <dv-capsule-chart class="dv-cap-chart" :config="config" />
            <Chart :chart-data="chartData"></Chart>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Chart from './chart/ChartTopRight1.vue';

const chartData = reactive({
    indicatorData: [
        { name: "朋友介绍", max: 300 },
        { name: "官网搜索", max: 250 },
        { name: "以旧换新", max: 300 },
        { name: "线上预订", max: 5 },
        { name: "线下预定", max: 200 },
        { name: "广告预定", max: 100 }
    ],
    dataBJ: [
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28]
    ],
    dataGZ: [
        [84, 94, 140, 2.238, 68, 18, 22],
        [93, 77, 104, 1.165, 53, 7, 23],
        [99, 130, 227, 3.97, 55, 15, 24],
        [146, 84, 139, 1.094, 40, 17, 25],
        [113, 108, 137, 1.481, 48, 15, 26],
        [81, 48, 62, 1.619, 26, 3, 27],
        [56, 48, 68, 1.336, 37, 9, 28]
    ],
    dataSH: [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7]
    ]
})

const config = reactive({
    data: [
        {
            name: '朋友介绍',
            value: 1288
        },
        {
            name: '官网搜索',
            value: 3564
        },
        {
            name: '以旧换新',
            value: 1144
        },
        {
            name: '线上预订',
            value: 1288
        },
        {
            name: '线下预定',
            value: 3455
        },
        {
            name: '广告预定',
            value: 1566
        }
    ]
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-top-right1 {
    height: $box-height4;
    // width: $box-width4;
    background-color: $theme-sub-color;
    margin: 5px;
    border-radius: 10px;

    .screen-top-header {
        height: $chart-header-height;

        .header-left {
            width: 30px;
        }

        .header-right {
            width: calc(100% - 30px);

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