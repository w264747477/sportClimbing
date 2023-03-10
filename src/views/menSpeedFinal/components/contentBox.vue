<template>
  <div class="content-box">
    <div class="content-box-left">
      <span> 1</span>
      <span>2</span>
      <span> 3</span>
    </div>
    <div>
      <span>4</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

const props = defineProps<{
  info: object;
}>();
</script>

<style scoped lang="scss">
.content-box {
  text-align: center;
  border: 1px solid #f0c620;
  padding: 3px;
  background-color: #2080b8;
  height: 1.5rem;
  border-radius: 15px;
  width: 22rem;
  color: #fff;
  font-size: 1.5rem;
  box-shadow: 0 2px 4px 0 rgba(181, 181, 181, 0.7);
  display: flex;
  justify-content: space-between;
}
</style>
