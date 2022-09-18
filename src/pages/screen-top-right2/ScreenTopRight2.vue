<template>
    <div class="screen-top-right2">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-border-bottom" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">品牌销量排行榜</span>
                <dv-decoration-1 class="dv-dec-1" />
            </div>
        </div>
        <div class="screen-top-chart">
            <dv-scroll-board class="dv-scr-board" :config="config" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const config = reactive({
    header: ['品牌', '销量', '环比'],
    data: [
        ['理想ONE', '11496', "<span class='scr-up'>↑22%</span>"],
        ['哪吒V', '7884', "<span class='scr-down'>↓13%</span>"],
        ['零跑TO3', '5724', "<span class='scr-up'>↑32%</span>"],
        ['问界M5', '5033', "<span class='scr-up'>↑34%</span>"],
        ['零跑C11', '4345', "<span class='scr-up'>↑25%</span>"],
        ['小鹏P7', '4224', "<span class='scr-up'>↑13%</span>"],
        ['小鹏P5', '3686', "<span class='scr-up'>↑24%</span>"],
        ['哪吒U', '3125', "<span class='scr-down'>↓16%</span>"],
        ['蔚来ES6', '2936', "<span class='scr-down'>↓23%</span>"],
        ['小鹏G3', '2221', "<span class='scr-up'>↑45%</span>"]
    ],
    rowNum: 7, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    index: true,
    columnWidth: [50],
    align: ['center']
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-top-right2 {
    height: $box-height5 - 5px;
    // width: $box-width5;
    background-color: $theme-sub-color;
    margin: 10px 10px;
    border-radius: 20px;

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

            .dv-dec-1 {
                width: 50px;
                height: 20px;
                margin-left: 10px;
            }
        }
    }

    .screen-top-chart {
        .dv-scr-board {
            width: 270px;
            height: 340px;
        }
    }
}
</style>