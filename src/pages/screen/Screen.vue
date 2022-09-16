<template>
    <div class="screen-container">
        <div class="screen-content" ref="screenRef"></div>
    </div>
</template>

<script setup lang="ts">
import windowResize from '@/utils/resize';
import { onMounted, onUnmounted } from 'vue';
// * 适配处理
const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()
// 生命周期
onMounted(() => {
    // todo 屏幕适应
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
        background-color: #d3d6dd;
        background-image: url('@/assets/home_bg.png');
        background-size: cover;
        background-position: center center;
    }
}
</style>