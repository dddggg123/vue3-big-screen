<template>
    <div class="screen-top-left2">
        <div class="screen-top-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-layer-group" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">省市销量分布</span>
                <dv-decoration-1 class="dv-dec-1" />
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
        value: 11455,
        elseData: {
            // 这里放置地图 tooltip 里想显示的数据
        }
    },
    {
        name: '厦门市',
        value: 13255,
    },
    {
        name: '漳州市',
        value: 7688,
    },
    {
        name: '泉州市',
        value: 5644,
    },
    {
        name: '三明市',
        value: 3466,
    },
    {
        name: '莆田市',
        value: 5745,
    },
    {
        name: '南平市',
        value: 2855,
    },
    {
        name: '龙岩市',
        value: 4652,
    },
    {
        name: '宁德市',
        value: 7888,
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

            .dv-dec-1 {
                width: 50px;
                height: 20px;
                margin-left: 10px;
            }
        }
    }
}
</style>