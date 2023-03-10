<template>
  <div class="main_title">
    <span class="title flex jc-center ai-center">{{ msg }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<style scoped lang="scss">
.main_title {
  width: 100%;
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: #e4e3e0;
  margin: 0 auto;
  .title {
    float: left;
    padding-left: 0.5rem;
    line-height: 0.5rem;
  }
}
</style>
