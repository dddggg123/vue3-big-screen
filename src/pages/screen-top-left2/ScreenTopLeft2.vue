<template>
    <div class="screen-top-left2">
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
            <Chart :chart-data="chartData"></Chart>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from './chart/ChartTopLeft2.vue';
import { reactive } from 'vue';
const chartData = reactive([
    {
        // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        name: '福州市',
        value: 10,
        elseData: {
            // 这里放置地图 tooltip 里想显示的数据
        }
    },
    {
        name: '厦门市',
        value: 9,
    },
    {
        name: '漳州市',
        value: 8,
    },
    {
        name: '泉州市',
        value: 7,
    },
    {
        name: '三明市',
        value: 6,
    },
    {
        name: '莆田市',
        value: 5,
    },
    {
        name: '南平市',
        value: 4,
    },
    {
        name: '龙岩市',
        value: 3,
    },
    {
        name: '宁德市',
        value: 2,
    }
])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-top-left2 {
    height: $box-height2;
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
}
</style>