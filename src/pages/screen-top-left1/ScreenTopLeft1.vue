<template>
    <div class="screen-top-left1">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-tongji4" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">任务通过率</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
        <div class="screen-top-chart">
            <Chart></Chart>
        </div>
        <div class="screen-top-data flex-l">
            <div class="data-item" v-for="(item, index) in state.dynamicDataList" :key="index">
                <div class="data-item-top flex-l">
                    <i class="iconfont" :class="[iconFontArr[index]]" />
                    <dv-digital-flop class="dv-digital-flop" :config="item.config" />
                </div>
                <div class="data-item-bottom flex-c">
                    <span class="data-item-title"> {{ item.text }} </span>
                    <span class="data-item-unit">(件)</span>
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
            number: 150,
            text: '今日构建总量'
        },
        {
            number: 144,
            text: '总共完成数量'
        },
        {
            number: 361,
            text: '正在编译数量'
        },
        {
            number: 571,
            text: '未通过数量'
        }
    ] as Array<DataObj>,
    dynamicDataList: [] as Array<any>,
    intervalInstance: 0
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
                toFixed: 1,
                content: '{nt}',
                style: {
                    fontSize: 24
                }
            },
            text: e.text
        })
    })
}

const changeTiming = () => {
    state.intervalInstance = setInterval(() => {
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
                    color: yellowgreen;
                }
            }
        }
    }
}
</style>