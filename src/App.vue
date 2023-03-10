<script setup lang="ts">
import useDraw from "@/utils/useDraw";
import { defineComponent, onMounted, onUnmounted } from "vue";
const { remCalcRate, windowDraw, unWindowDraw } = useDraw();
// 生命周期
onMounted(() => {
  remCalcRate();
  windowDraw();
});
onUnmounted(() => {
  unWindowDraw();
});
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
