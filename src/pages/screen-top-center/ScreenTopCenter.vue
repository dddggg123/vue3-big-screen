<template>
    <div class="screen-top-center">
        <div class="top-center-data">
            <div class="data-item" v-for="(item, index) in state.dataList">
                <p class="data-item-title">{{item.title}}</p>
                <!-- <p class="data-item-desc">{{item.value}}</p> -->
                <!-- <dv-scroll-ranking-board class="dv-scr-rank-board" :config="ranking" /> -->
                <dv-digital-flop class="dv-digital-flop" :config="item.config" />
            </div>
        </div>
        <div class="top-center-chart">
            <div class="chart-item">
                <div class="screen-top-header flex-l">
                    <div class="header-left flex-c">
                        <i class="iconfont icon-zhibiao2" />
                    </div>
                    <div class="header-right flex-l">
                        <span class="header-title">今日地区销量排行</span>
                        <dv-decoration-3 class="dv-dec-3" />
                    </div>
                </div>
                <dv-scroll-ranking-board class="dv-scr-rank-board" :config="state.rankList" />
            </div>
            <div class="chart-item">
                <div class="screen-top-header flex-l">
                    <div class="header-left flex-c">
                        <i class="iconfont icon-cloudupload" />
                    </div>
                    <div class="header-right flex-l">
                        <span class="header-title">今日业绩完成度</span>
                        <!-- <dv-decoration-3 class="dv-dec-3" /> -->
                    </div>
                </div>
                <div class="pond-section">
                    <dv-water-level-pond class="dv-water-level-pond" :config="state.completeObj" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue';
const state = reactive({
    dataList: [
        {
            title: '今日累计销量',
            value: 755,
            config: {
                number: [755],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }, {
            title: '本周累计销量',
            value: 3288,
            config: {
                number: [3288],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }, {
            title: '本月累计销量',
            value: 14222,
            config: {
                number: [14222],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }, {
            title: '季度累计销量',
            value: 41022,
            config: {
                number: [41022],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }, {
            title: '年度累计销量',
            value: 176888,
            config: {
                number: [176888],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }, {
            title: '今日目标销量',
            value: 820,
            config: {
                number: [820],
                toFixed: 0,
                content: '{nt}',
                textAlign: 'left',
                style: {
                    fontSize: 24
                }
            }
        }
    ],
    completeObj: {
        data: [45, 56],
        shape: 'round'
    },
    rankList: {
        data: [
            {
                name: '武汉市',
                value: 1210
            },
            {
                name: '北京',
                value: 1655
            },
            {
                name: '上海',
                value: 1788
            },
            {
                name: '深圳',
                value: 2100
            },
            {
                name: '广州',
                value: 1577
            },
            {
                name: '成都',
                value: 1625
            },
            {
                name: '厦门',
                value: 857
            },
            {
                name: '郑州',
                value: 1322
            },
            {
                name: '长沙',
                value: 1122
            },
            {
                name: '南昌',
                value: 899
            }
        ],
        carousel: 'single',
        unit: '辆'
    },
    intervalInstance: 0
})

onMounted(() => {
    changeTiming()
})

onUnmounted(() => {
    window.clearInterval(state.intervalInstance)
})

const changeTiming = () => {
    state.intervalInstance = window.setInterval(() => {
        changeNumber();
        // changeCompleteObj();
    }, 2000)
}

const changeNumber = () => {
    state.dataList.forEach((item, _index) => {
        item.value += 1;
        item.config.number[0] += 1
        item.config = { ...item.config }
    })
}

// const changeCompleteObj = () => {
//     let list = state.completeObj.data;
//     let pondDown = list[0];
//     let pondUp = list[1];
//     pondDown += 1;
//     pondUp += 1;
//     if (pondUp === 100) {
//         pondUp = 40;
//         pondDown = 33;
//     }
//     state.completeObj.data = [pondDown, pondUp];
// }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-top-center {
    height: $box-height3;
    // width: $box-width3;
    // background-color: $theme-sub-color;
    margin: 5px;
    border-radius: 5px;

    .top-center-data {
        height: 40%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5px;
        padding: 5px;

        .data-item {
            background-color: $theme-sub-color;
            padding: 0 10px;

            .data-item-title {
                color: #fff;
                font-size: $base-font-size;
                margin-top: 10px;
            }

            .data-item-desc {
                color: #3de7c9;
                font-size: $lg-font-size;
                font-weight: 550;
                margin-top: 10px;
            }

            .dv-digital-flop {
                width: 100%;
                height: 30px;
                margin-top: 5px;
            }
        }
    }

    .top-center-chart {
        height: 60%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 5px;
        padding: 0 5px;

        .chart-item {
            background-color: $theme-sub-color;

            .dv-scr-rank-board {
                height: 200px;
                padding: 0 10px;
            }

            // 这里实现动态等宽高
            .pond-section {
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 100%;
                margin-top: 15px;

                .dv-water-level-pond {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }
            }

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
    }
}
</style>