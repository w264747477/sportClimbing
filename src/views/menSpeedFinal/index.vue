<template>
  <div class="page">
    <HeaderSp :msg="headerTitle"></HeaderSp>
    <TitleSp :msg="'Men Speed Final'"></TitleSp>
    <RightTree :list="list" :showfields="showFields"></RightTree>
    <ContentBox class="ctb" style="bottom: 32rem"></ContentBox>
    <ContentBox class="ctb" style="bottom: 35rem"></ContentBox>
    <ContentBox class="ctb" style="bottom: 8rem"></ContentBox>
    <ContentBox class="ctb" style="bottom: 5rem"></ContentBox>
  </div>
</template>

<script setup lang="ts">
import HeaderSp from "@/components/headerSp.vue";
import TitleSp from "@/components/titleSp.vue";
import ContentBox from "./components/contentBox.vue";
import { onMounted, reactive } from "vue";
import { ref } from "vue";
import API from "@/api/index";
import RightTree from "./components/treeHor.vue";

let headerTitle = ref('"中国体育彩票"第二十八届全国攀岩锦标赛');
defineProps<{ msg: string }>();
let list = [
  //datasource
  {
    id: "1",
    name: "父节点",
    serviceId: "service1",
    children: [
      {
        id: "1-1",
        name: "user",
        serviceId: "service-user",
        children: [
          {
            id: "1-1-1",
            name: "shop",
            serviceId: "18",
            children: [
              {
                id: "1-1-1-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "1-1-1-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
          {
            id: "1-1-2",
            name: "account1",
            serviceId: "account-service",
            children: [
              {
                id: "1-1-2-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "1-1-2-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        name: "truck",
        serviceId: "truck-pay",
        work: "web",
        children: [
          {
            id: "1-2-1",
            name: "shop",
            serviceId: "18",
            children: [
              {
                id: "1-2-1-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "1-2-1-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
          {
            id: "1-2-2",
            name: "account1",
            serviceId: "account-service",
            children: [
              {
                id: "1-2-2-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "1-2-2-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    serviceId: "service2",
    children: [
      {
        id: "2-1",
        name: "user",
        serviceId: "service-user",
        children: [
          {
            id: "2-1-1",
            name: "shop",
            serviceId: "18",
            children: [
              {
                id: "2-1-1-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "2-1-1-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
          {
            id: "2-1-2",
            name: "account1",
            serviceId: "account-service",
            children: [
              {
                id: "2-1-2-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "2-1-2-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
        ],
      },
      {
        id: "2-2",
        name: "truck",
        serviceId: "truck-pay",
        work: "web",
        children: [
          {
            id: "2-2-1",
            name: "shop",
            serviceId: "18",
            children: [
              {
                id: "2-2-1-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "2-2-1-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
          {
            id: "2-2-2",
            name: "account1",
            serviceId: "account-service",
            children: [
              {
                id: "2-2-2-1",
                name: "common",
                serviceId: "common-service",
              },
              {
                id: "2-2-2-2",
                name: "common",
                serviceId: "common-service",
              },
            ],
          },
        ],
      },
    ],
  },
];
let showFields = [
  {
    name: "服务名称：",
    key: "name",
  },
  {
    name: "服务编号：",
    key: "serviceId",
  },
];

const getInfo = async () => {
  let res = await API.getMenBoulderingFinal();
  console.log(res);
  if (res != undefined) {
  }
};
onMounted(() => {
  getInfo();
});
</script>

<style scoped lang="scss">
.tbc {
  color: red !important;
  font-size: 100px;
  background-color: #1380c3 !important;
}

.page {
  width: 100%;
  height: 100%;

  .pagon {
    font-size: 14px;
  }
}
:deep .el-table .cell {
  padding: 0;
}
.ctb {
  position: absolute;
  right: 7rem;
}
</style>
