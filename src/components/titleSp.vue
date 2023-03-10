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
  width: 30%;
  height: 3.5rem;
  font-size: 1.5rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  background: url("@/assets/images/titleSp.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    float: left;
    padding-left: 0.5rem;
    line-height: 3rem;
  }
}
</style>
