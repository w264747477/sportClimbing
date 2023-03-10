<template>
  <div class="header">
    <!-- <div class="left">
      <img src="@/assets/images/logo.png" alt="" />
    </div>

    <div class="right">
      <span class="title flex jc-center ai-center">{{ msg }}</span>
    </div> -->
    <div class="img">
      <span class="title flex jc-center ai-center">{{ msg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  font-size: 0.5rem;
  // background-color: #d6cece;
  margin: 0 auto;
  .img {
    width: 100%;
    height: 100%;
    background: url("@/assets/images/header2.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .title {
    color: #fff;
    line-height: 1.3rem;
    height: 1.3rem;
    // line-height: 3rem;
  }
  .left {
    width: 1rem;
    height: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    height: 1rem;
    width: 100%;
    background: url("@/assets/images/header1.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
}
</style>
