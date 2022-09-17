<template>
    <div class="screen-bottom-left">
        <div class="screen-bottom-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-align-left" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">数据统计</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
        <div class="screen-bottom-chart">
            <Chart :chart-data="chartData"></Chart>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from './chart/ChartBottomLeft.vue'
import { defineComponent, reactive, onMounted } from 'vue'
const chartData = reactive({
    category: [
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
    lineData: [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        59521,
        67560,
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        36097,
        39867,
        44715,
        48444,
        50415,
        50061,
        32677,
        49521,
        32808
    ],
    barData: [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        22500,
        14000,
        21500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
    ],
    rateData: [] as Array<string>
})

// methods
const setData = () => {
    for (let i = 0; i < chartData.barData.length - 1; i++) {
        const rate = chartData.barData[i] / chartData.lineData[i];
        chartData.rateData.push(rate.toFixed(2));
    }
}

// 生命周期
onMounted(() => {
    setData()
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-bottom-left {
    height: $box-height6 - 10px;
    // width: $box-width3;
    background-color: $theme-sub-color;
    margin: 15px 5px;
    border-radius: 20px;

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