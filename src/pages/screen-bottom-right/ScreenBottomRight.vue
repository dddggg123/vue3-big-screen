<template>
    <div class="screen-bottom-right">
        <div class="screen-bottom-header flex-l">
            <div class="header-left flex-c">
                <i class="iconfont icon-tongji4" />
            </div>
            <div class="header-right flex-l">
                <span class="header-title">数据统计</span>
                <dv-decoration-3 class="dv-dec-3" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-bottom-right {
    height: $box-height7;
    // width: $box-width3;
    background-color: $theme-sub-color;
    margin: 5px;
    border-radius: 10px;

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