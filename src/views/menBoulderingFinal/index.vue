<template>
  <div class="page">
    <Header :msg="headerTitle"></Header>
    <Title msg="Men Bouldering Final"></Title>

    <el-table
      :data="tableColInfo"
      style="width: 100%"
      :row-style="tableRowClassName"
      :header-cell-style="headerRowStyle"
      :cell-style="changeCellStyle"
    >
      <el-table-column prop="index" label="" width="100" />
      <el-table-column prop="num" label="号码" width="100" />
      <el-table-column prop="rank" label="相对排名" width="180" />
      <el-table-column prop="from" label="代表队" width="180" />
      <el-table-column prop="men" label="运动员" width="180" />

      <el-table-column prop="number" label="1" width="32">
        <template #default="scope">
          <!-- <div style="position: relative">
            <div
              class="diamond"
              :style="{
                '--backImage': bcI,
                'background-color': 'red',
              }"
            >
              <span class="diamond_numL">1</span>
              <span class="diamond_numR">5</span>
            </div>
            <div class="dw"></div>
          </div> -->
          <diamond :type="1" :val="[1, 2]"></diamond>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="2" width="32">
        <template #default="scope">
          <diamond :type="2" :val="[1]"></diamond>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="3" width="32">
        <template #default="scope">
          <diamond :type="3" :val="[]"></diamond>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="4" width="32">
        <template #default="scope">
          <diamond :type="1" :val="[1, 2]"></diamond>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="5" width="200">
        <template #default="scope">
          <diamond :type="1" :val="[1, 2]"></diamond>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="成绩" />
    </el-table>
    <el-pagination
      class="mt15 pagon"
      :current-page="pageInfo.page"
      :page-sizes="pageInfo.sizes"
      :page-size="pageInfo.size"
      :layout="pageInfo.layout"
      :total="pageInfo.total"
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header.vue";
import Title from "@/components/title.vue";
import { left } from "@popperjs/core";
import { onMounted, reactive } from "vue";
import { ref } from "vue";
import diamond from "./components/diamond.vue";
import API from "@/api/index";
let headerTitle = ref('"中国体育彩票"第二十八届全国攀岩锦标赛');
defineProps<{ msg: string }>();
let pageInfo = reactive({
  page: 1,
  size: 5,
  sizes: [5, 7, 10],
  total: 100,
  layout: "total, prev, pager, next, jumper, sizes",
});
const tableRowClassName = (row, rowIndex) => {
  console.log(row);
  return {
    backgroundColor: "#1d7eb6",
    color: "#ecffff",
    borderRadius: "20px",
    marginBottm: "0.1rem",
  };
};
const headerRowStyle = ({ row, column, rowIndex, columnIndex }) => {
  return {
    backgroundColor: "#1d7eb6",
    color: "#ecffff",
    // borderRadius: "20px",
    marginBottm: "0.1rem",
  };
};
const changeCellStyle = ({ row, column, rowIndex, columnIndex }) => {
  if (![5, 6, 7, 8, 9].includes(columnIndex)) {
    return {
      paddingLeft: "12px",
    };
  }
};

let tableColInfo = reactive([
  {
    index: "1",
    num: "039",
    rank: "1",
    from: "湖北",
    men: "高规格",
    number: "11",
    score: "3T4z 6 6",
  },
  {
    index: "2",
    num: "039",
    rank: "1",
    from: "湖北",
    men: "高规格",
    number: "11",
    score: "3T4z 6 6",
  },
]);
const tableData = ref([tableColInfo]);
const handleSizeChange = (val) => {
  pageInfo.size = val;
};
const handlePageChange = (val) => {
  pageInfo.page = val;
  // getList();
};
const getInfo = async () => {
  let res = await API.getMenBoulderingFinal();
  console.log(res);
  if (res != undefined) {
    const data = res.data;
    tableData.value = data;
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
</style>
