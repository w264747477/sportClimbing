<template>
  <div class="page">
    <Header :msg="headerTitle"></Header>
    <Title msg="Men Lead Qualification"></Title>

    <el-table
      :data="tableColInfo"
      style="width: 100%"
      :row-style="tableRowClassName"
      :header-cell-style="headerRowStyle"
      :cell-style="changeCellStyle"
    >
      <el-table-column prop="index" label="出场" width="100" />
      <el-table-column prop="num" label="" width="300" />
      <el-table-column prop="from" label="" width="180" />
      <el-table-column prop="men" label="" width="180" />
      <el-table-column prop="score" label="" width="180" />
      <el-table-column prop="num2" label="" width="100" />
      <el-table-column prop="men2" label="" width="100" />
      <el-table-column prop="score2" label="" />
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
import API from "@/api/index";
let headerTitle = ref("汕头2021第三届亚洲青年运动会");
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
    paddingLeft: "6px",
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

    from: "湖北",
    men: "张三",
    score: "6",
    num2: "006",
    men2: "张三",
    score2: "8",
  },
  {
    index: "2",
    num: "039",

    from: "湖北",
    men: "高规格",
    scoreA: "6",
    scoreB: "8",
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
