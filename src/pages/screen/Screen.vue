<template>
    <div class="screen-container">
        <div class="screen-content" ref="screenRef">
            <div class="header-section">
                <ScreenHeader></ScreenHeader>
            </div>
            <div class="screen-chart-section1">
                <dv-border-box-12>
                    <ScreenTopLeft1></ScreenTopLeft1>
                </dv-border-box-12>
                <dv-border-box-12>
                    <ScreenTopLeft2></ScreenTopLeft2>
                </dv-border-box-12>
                <dv-border-box-8 dur="10">
                    <ScreenTopCenter></ScreenTopCenter>
                </dv-border-box-8>
                <dv-border-box-12>
                    <ScreenTopRight1></ScreenTopRight1>
                </dv-border-box-12>
                <dv-border-box-13>
                    <ScreenTopRight2></ScreenTopRight2>
                </dv-border-box-13>
            </div>
            <div class="screen-chart-section2">
                <dv-border-box-13>
                    <ScreenBottomLeft></ScreenBottomLeft>
                </dv-border-box-13>
                <dv-border-box-12>
                    <ScreenBottomRight></ScreenBottomRight>
                </dv-border-box-12>
            </div>
            <div class="footer-section">
                <ScreenFooter></ScreenFooter>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import windowResize from '@/utils/resize';
import { onMounted, onUnmounted } from 'vue';
import ScreenHeader from '@/pages/screen-header/ScreenHeader.vue';
import ScreenFooter from '@/pages/screen-footer/ScreenFooter.vue';
import ScreenTopLeft1 from '@/pages/screen-top-left1/ScreenTopLeft1.vue';
import ScreenTopLeft2 from '@/pages/screen-top-left2/ScreenTopLeft2.vue';
import ScreenTopCenter from '@/pages/screen-top-center/ScreenTopCenter.vue';
import ScreenTopRight1 from '@/pages/screen-top-right1/ScreenTopRight1.vue';
import ScreenTopRight2 from '@/pages/screen-top-right2/ScreenTopRight2.vue';
import ScreenBottomLeft from '@/pages/screen-bottom-left/ScreenBottomLeft.vue';
import ScreenBottomRight from '@/pages/screen-bottom-right/ScreenBottomRight.vue';

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()

onMounted(() => {
    // 监听浏览器窗口尺寸变化
    windowDraw()
    calcRate()
})

onUnmounted(() => {
    unWindowDraw();
})
</script>

<style lang="scss" scoped>
.screen-container {
    width: 100vw;
    height: 100vh;
    background-color: #020308;
    display: flex;
    justify-content: center;
    align-items: center;

    .screen-content {
        width: 1920px;
        height: 1080px;
        box-sizing: border-box;
        padding: 12px;
        background-image: url('@/assets/home_bg.png');
        background-size: cover;
        background-position: center center;

        .screen-chart-section1 {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
            grid-column-gap: 5px;
        }

        .screen-chart-section2 {
            margin-top: 5px;
            display: grid;
            grid-template-columns: 5fr 5fr;
            grid-column-gap: 5px;
        }
    }
}
</style>