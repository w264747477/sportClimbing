<template>
  <div style="position: relative">
    <div
      class="diamond"
      :style="{
        '--backImage': bcI,
        '--backColor': bc,
      }"
    >
      <span class="diamond_numL">{{ val.length == 2 ? val[0] : "" }}</span>
      <span class="diamond_numR">{{
        val.length == 2 ? val[1] : val.length == 1 ? val[0] : ""
      }}</span>
    </div>
    <div v-if="val.length == 1" class="dw"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

const props = defineProps<{
  val: Array<number>;
}>();
// let bcI = ref("linear-gradient(to top, #a3c475, #356f3e)");
let { val } = toRefs(props);
let bcI = ref("none");
let bc = ref("#fff");
if (val.value.length != 0) {
  bcI.value = "linear-gradient(to top, #a3c475, #356f3e)";
  // bc.value=''
}
// if (val.value.length == 2) {
//   bcI.value = "linear-gradient(to top, #a3c475, #356f3e)";
//   // bc.value=''
// } else if (val.value.length == 1) {
//   bcI.value = "linear-gradient(to top, #a3c475, #356f3e)";
// }
</script>

<style scoped lang="scss">
.diamond {
  position: relative;
  content: "";
  width: 28px;
  height: 28px;
  background-image: var(--backImage);
  background-color: var(--backColor);
  border-radius: 9px;
  font-size: 1px;
  font-weight: 700;
  .diamond_numL {
    position: absolute;
    top: -2px;
    left: 5px;
  }
  .diamond_numR {
    position: absolute;
    bottom: -3px;
    right: 4px;
  }
}
.dw {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  content: "";
  border-radius: 9px;
  border: 14px solid rgb(248, 245, 245);
  border-right: 14px solid transparent;
  border-bottom: 14px solid transparent;
  z-index: 99;
}
</style>
