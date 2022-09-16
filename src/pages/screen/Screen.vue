<template>
    <div class="screen-container">
        <div class="screen-content" ref="screenRef">
            <div class="header-section">
                <ScreenHeader></ScreenHeader>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import windowResize from '@/utils/resize';
import { onMounted, onUnmounted } from 'vue';
import ScreenHeader from '@/pages/screen-header/ScreenHeader.vue'
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
    }
}
</style>