<template>
    <div>{{ userStore.name }}</div>
    <h1>{{ msg }}</h1>
    <h1>测试 vueUse 的鼠标坐标</h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <button @click="requestRes">axios登录</button>

    <el-button type="primary" @click="userStore.updateName('李四')"
        >store更新</el-button
    >
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
        >, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import { useMouse } from '@vueuse/core';
import API from '@/api';
const requestRes = async () => {
    let result = await API.login('zhangsan', '123456');
    console.log(result);
};
defineProps<{ msg: string }>();
const userStore = useUserStore();
const count = ref(0);
//vueUse使用
const { x, y } = useMouse();
</script>

<style scoped lang="scss">
.read-the-docs {
    color: #888;
}
</style>
