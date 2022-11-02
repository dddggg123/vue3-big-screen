<template>
    <div class="screen-container">
        <div class="screen-content" ref="screenRef">
            <div v-if="loading" class="mask flex-c">
                <dv-loading>
                    <span class="loading-title">加载中...</span>
                </dv-loading>
            </div>
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
                <dv-border-box-8 :dur="10">
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
import { onMounted, onUnmounted, ref } from 'vue';
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
const loading = ref(true);

onMounted(() => {
    // 监听浏览器窗口尺寸变化
    windowDraw()
    calcRate()
    setTimeout(() => {
        loading.value = false;
    }, 2000);
})

onUnmounted(() => {
    unWindowDraw();
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/variables.scss';

.screen-container {
    width: 100vw;
    height: 100vh;
    background-color: $theme-color;
    display: flex;
    justify-content: center;
    align-items: center;


    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: $theme-color;
        z-index: 9999;
        background-image: url('@/assets/home_bg.png');
    }

    .screen-content {
        width: 1920px;
        height: 1080px;
        box-sizing: border-box;
        padding: 12px;
        background-image: url('@/assets/home_bg.png');
        transition: all .2s ease-in-out;

        .loading-title {
            font-size: $base-font-size;
            color: #fff;
            margin-top: 10px;
        }

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