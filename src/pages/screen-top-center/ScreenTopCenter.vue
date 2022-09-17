<template>
    <div class="screen-top-center">
        <div class="top-center-data">
            <div class="data-item" v-for="(item, index) in state.dataList">
                <p class="data-item-title">{{item.title}}</p>
                <p class="data-item-desc">{{item.value}}</p>
                <!-- <dv-scroll-ranking-board class="dv-scr-rank-board" :config="ranking" /> -->
            </div>
        </div>
        <div class="top-center-chart">
            <div class="chart-item">
                <div class="screen-top-header flex-l">
                    <div class="header-left flex-c">
                        <i class="iconfont icon-zhibiao2" />
                    </div>
                    <div class="header-right flex-l">
                        <span class="header-title">年度负责人组件达标榜</span>
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
                <dv-water-level-pond class="dv-water-level-pond" :config="state.completeObj" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
    dataList: [
        {
            title: '今年累计任务建次数',
            value: '1888'
        }, {
            title: '本月累计任务次数',
            value: '333'
        }, {
            title: '今日累计任务次数',
            value: '188'
        }, {
            title: '今年失败任务次数',
            value: '66'
        }, {
            title: '今年成功次数',
            value: '988'
        }, {
            title: '今年达标任务个数',
            value: '566'
        }
    ],
    completeObj: {
        data: [66, 45],
        shape: 'roundRect'
    },
    rankList: {
        data: [
            {
                name: '周口',
                value: 55
            },
            {
                name: '南阳',
                value: 120
            },
            {
                name: '西峡',
                value: 78
            },
            {
                name: '驻马店',
                value: 66
            },
            {
                name: '新乡',
                value: 80
            },
            {
                name: '新乡2',
                value: 80
            },
            {
                name: '新乡3',
                value: 80
            },
            {
                name: '新乡4',
                value: 80
            },
            {
                name: '新乡5',
                value: 80
            },
            {
                name: '新乡6',
                value: 80
            }
        ],
        carousel: 'single',
        unit: '人'
    }
})
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
                color: #257dff;
                font-size: $base-font-size;
                margin-top: 10px;
            }

            .data-item-desc {
                color: #3de7c9;
                font-size: $lg-font-size;
                font-weight: 550;
                margin-top: 10px;
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

            .dv-water-level-pond {
                height: 200px;
                width: 100%;
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