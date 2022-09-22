<template>
    <div class="screen-footer">
        <div class="screen-footer-left">
            <dv-decoration-10 :color="['#45a1f1', '#000000']" class="dv-dec-10" :dur="10"/>
        </div>
        <div class="screen-footer-middle">
            <dv-decoration-5 :color="['#45a1f1', '#000000']" :dur="10"/>
        </div>
        <div class="screen-footer-right">
            <dv-decoration-10 :color="['#45a1f1', '#000000']" class="dv-dec-10 dev-reverse" :dur="10"/>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.screen-footer {
    display: flex;

    .screen-footer-left {
        width: 35%;
    }

    .screen-footer-middle {
        width: 30%;
    }

    .screen-footer-right {
        width: 35%;
    }

    .dv-dec-10 {
        margin-top: -6px;
    }
}
</style>