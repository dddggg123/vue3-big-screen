<template>
    <div class="screen-top-right2">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-tongji4" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">任务完成排行榜</span>
                <dv-decoration-3 class="dv-dec-3" />
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
    header: ['组件', '分支', '覆盖率'],
    data: [
        ['组件1', 'dev-1', "<span class='scr-up'>↑75%</span>"],
        ['组件2', 'dev-2', "<span class='scr-down'>↓33%</span>"],
        ['组件3', 'dev-3', "<span class='scr-up'>↑100%</span>"],
        ['组件4', 'rea-1', "<span class='scr-up'>↑94%</span>"],
        ['组件5', 'rea-2', "<span class='scr-up'>↑95%</span>"],
        ['组件6', 'fix-2', "<span class='scr-up'>↑63%</span>"],
        ['组件7', 'fix-4', "<span class='scr-up'>↑84%</span>"],
        ['组件8', 'fix-7', "<span class='scr-down'>↓46%</span>"],
        ['组件9', 'dev-2', "<span class='scr-down'>↓13%</span>"],
        ['组件10', 'dev-9', "<span class='scr-up'>↑76%</span>"]
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

            .dv-dec-3 {
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