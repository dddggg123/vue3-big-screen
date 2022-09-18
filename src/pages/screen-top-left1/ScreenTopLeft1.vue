<template>
    <div class="screen-top-left1">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-tongji4" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">新势力销量占比</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
        <div class="screen-top-chart">
            <Chart :chart-data="chartData"></Chart>
        </div>
        <div class="screen-top-data flex-l">
            <div class="data-item" v-for="(item, index) in state.dynamicDataList" :key="index">
                <div class="data-item-top flex-l">
                    <i class="iconfont" :class="[iconFontArr[index]]" />
                    <dv-digital-flop class="dv-digital-flop" :config="item.config" />
                </div>
                <div class="data-item-bottom flex-c">
                    <span class="data-item-title"> {{ item.text }} </span>
                    <span class="data-item-unit">(辆)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from './chart/ChartTopLeft1.vue';
import { ref, reactive, onMounted, onUnmounted } from 'vue';

type DataObj = {
    number: number,
    text: string
}

const iconFontArr = [
    'icon-diagnose',
    'icon-monitoring',
    'icon-cloudupload',
    'icon-clouddownload'
]
const state = reactive({
    dataList: [
        {
            number: 3250,
            text: '今日销量'
        },
        {
            number: 11122,
            text: '本周销量'
        },
        {
            number: 36788,
            text: '本月销量'
        },
        {
            number: 152234,
            text: '本季度销量'
        }
    ] as Array<DataObj>,
    dynamicDataList: [] as Array<any>,
    intervalInstance: 0
})

const chartData = reactive({
    titleArr: ['理想ONE', '哪吒V', '零跑TO3', '问界M5', '零跑C11', '小鹏P7'],
    dataArr: [
        { value: 11496, name: '理想ONE' },
        { value: 7884, name: '哪吒V' },
        { value: 5724, name: '零跑TO3' },
        { value: 5033, name: '问界M5' },
        { value: 4345, name: '零跑C11' },
        { value: 4224, name: '小鹏P7' },
    ]
})

onMounted(() => {
    configList()
    changeTiming()
})

onUnmounted(() => {
    window.clearInterval(state.intervalInstance)
})

const configList = () => {
    state.dataList.forEach((e: DataObj) => {
        state.dynamicDataList.push({
            config: {
                number: [e.number],
                toFixed: 0,
                content: '{nt}',
                style: {
                    fontSize: 20
                }
            },
            text: e.text
        })
    })
}

const changeTiming = () => {
    state.intervalInstance = window.setInterval(() => {
        changeNumber()
    }, 2000)
}

const changeNumber = () => {
    state.dynamicDataList.forEach((item, index) => {
        item.config.number[0] += ++index
        item.config = { ...item.config }
    })
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-top-left1 {
    // 这里高度减去上下margin的高度之和
    height: $box-height1;
    // width: $box-width2;
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

    .screen-top-data {
        .data-item {
            width: 50%;
            height: 70px;

            .data-item-top {
                height: 50%;
                padding-left: 10px;

                .dv-digital-flop {
                    width: 80%;
                    height: 30px;
                }
            }

            .data-item-bottom {
                height: 50%;

                .data-item-title {
                    color: #d3d6dd;
                    font-size: $sm-font-size;
                }

                .data-item-unit {
                    color: #9fe6b8;
                }
            }
        }
    }
}
</style>