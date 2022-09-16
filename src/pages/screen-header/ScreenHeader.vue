<template>
    <div class="screen-header">
        <div class="screen-header-top-section">
            <dv-decoration-10 class="dv-dec-10" />
            <div class="screen-header-title-section">
                <dv-decoration-8 class="dv-dec-8" :color="decorationColors" />
                <div class="title-section">
                    <p class="header-title">大数据可视化平台</p>
                </div>
                <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColors" />
            </div>
            <dv-decoration-10 class="dv-dec-10" :reverse="true" />
        </div>
        <div class="screen-header-bottom-section">
            <div class="sub-section">
                <div class="sub-item flex-l sub-item-common-r">
                    <span class="sub-title">数据分析</span>
                </div>
                <div class="sub-item flex-c react-l">
                    <span class="sub-title">切换数据</span>
                </div>
            </div>
            <div class="sub-dec-section">
                <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <div class="sub-section">
                <div class="sub-item flex-c react-r">
                    <span class="sub-title">vue3-big-screen</span>
                </div>
                <div class="sub-item flex-r sub-item-common-l">
                    <span class="sub-title">2022-09-16 周五 17:00</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const decorationColors = [
    '#568aea',
    '#000000'
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-header {

    .screen-header-top-section {
        display: flex;

        .screen-header-title-section {
            width: 50%;
            display: flex;
            padding-top: 10px;

            .dv-dec-8 {
                width: 30%;
            }

            .title-section {
                width: 40%;
                text-align: center;

                .header-title {
                    color: #fff;
                    font-size: $lg-font-size;
                }
            }
        }

        .dv-dec-10 {
            width: 25%;
            height: $dv-dec-height;
        }
    }

    .screen-header-bottom-section {
        display: flex;

        .sub-section {
            width: 40%;
            display: flex;
            justify-content: space-between;
            height: 50px;

            .sub-item {
                width: calc(50% - 60px);
                // background-color: #0f1325;
                padding: 0 20px;

                .sub-title {
                    color: #fff;
                    font-size: $base-font-size;
                }
            }

            .sub-item-common-l {
                background-color: $theme-sub-color;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    // border: transparent transparent $theme-sub-color $theme-sub-color;
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid $theme-sub-color;
                    border-left: 25px solid transparent;
                    border-right: 25px solid $theme-sub-color;
                    position: absolute;
                    top: 0;
                    left: -50px;
                }
            }

            .sub-item-common-r {
                background-color: $theme-sub-color;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    // border: transparent transparent $theme-sub-color $theme-sub-color;
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid $theme-sub-color;
                    border-left: 25px solid $theme-sub-color;
                    border-right: 25px solid transparent;
                    position: absolute;
                    top: 0;
                    left: 100%;
                }
            }
        }

        .sub-dec-section {
            width: 20%;
            padding: 0 40px;
        }
    }
}
</style>