<template>
    <div class="screen-bottom-left">
        <div class="screen-bottom-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-align-left" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">城市销量排行</span>
                <dv-decoration-1 class="dv-dec-1" />
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
    lineData: [
        1092,
        2728,
        2045,
        2348,
        3808,
        3097,
        3867,
        4715,
        4444,
        5415,
        5061,
        6677,
        5521,
        6560,
        1092,
        2728,
        2045,
        2348,
        3808,
        3097,
        3867,
        4715,
        4444,
        5415,
        3097,
        3867,
        4715,
        4444,
        5415,
        5061,
        3677,
        4521,
        3808
    ],
    barData: [
        400,
        500,
        500,
        600,
        700,
        800,
        900,
        1500,
        1000,
        2500,
        2200,
        2450,
        2250,
        3300,
        400,
        500,
        500,
        600,
        700,
        800,
        900,
        2500,
        1000,
        2500,
        800,
        900,
        1500,
        1000,
        2500,
        2200,
        2450,
        2250,
        700
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

            .dv-dec-1 {
                width: 50px;
                height: 20px;
                margin-left: 10px;
            }
        }
    }
}
</style>