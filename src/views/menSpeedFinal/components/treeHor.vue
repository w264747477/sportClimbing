<template>
  <div v-if="showTree" class="TreeRight">
    <div class="childs">
      <div
        v-for="(item, index) in list"
        :key="item.id + '-child-' + index"
        class="child"
      >
        <div
          class="child-item"
          :style="{
            marginLeft: item.children && item.children.length > 1 ? '20px' : '',
          }"
        >
          <div :id="item" class="childname">
            <div :id="item.id" :ref="item.id" class="content-box">
              <div class="content-box-left">
                <span> 1</span>
                <span>2</span>
                <span> 3</span>
              </div>
              <div>
                <span>4</span>
              </div>

              <!-- <p
                v-for="(itemshow, index3) in showfields"
                :key="'itemshow' + index3"
              >
                {{ itemshow.name }}{{ item[itemshow.key] }}
              </p> -->
            </div>
            <div style=""></div>
            <div
              v-if="isFirst(item.id) && domready"
              class="position-top"
              :style="position_top(item.id, 'top')"
            ></div>
            <div
              v-if="isLast(item.id)"
              class="position-top"
              :style="position_top(item.id, 'bottom')"
            ></div>
          </div>
          <!-- <div style="width: 10px"></div> -->
        </div>
        <div
          v-if="item.children && item.children.length"
          class="child-children"
        >
          <RightTree :list="item.children" :showfields="showfields" />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import LeaderLine from "leader-line-vue";
export default {
  name: "RightTree",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    showfields: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      domready: false,
      lines: [],
    };
  },
  create() {},
  computed: {
    /**
     * 是否展示树计算属性
     */
    showTree() {
      return this.list && this.list.length;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.domready = true;
      this.drawArrowLine();
    });
  },
  beforeUnmount() {
    /**
     * 离开页面时销毁所有line
     */
    if (this.lines && this.lines.length) {
      this.lines.forEach((line) => {
        line.remove();
      });
    }
  },
  methods: {
    /**
     * 递归绘制箭头
     */
    drawArrowLine() {
      this.drawLeaderLine(this.list);
    },
    /**
     * 根据上下级关系绘制线条
     */
    drawLeaderLine(list) {
      list.forEach((element) => {
        let start = document.getElementById(element.id);
        if (element.children && element.children.length) {
          element.children.forEach((child) => {
            let line = LeaderLine.setLine(
              start,
              document.getElementById(child.id)
            );
            line.color = "#f0c620";
            line.path = "grid";
            line.size = 3;
            line.endPlug = "behind";
            // line.setOptions({
            //   dash: { animation: true },
            // });
            this.lines.push(line);
          });
          this.drawLeaderLine(element.children);
        }
      });
    },
    position_top(id, position) {
      let dom = document.getElementById(id);
      let height;
      if (dom) {
        height = dom.clientHeight;
      }
      let rt;
      if (position === "top") {
        rt = {
          height: height / 2 - 2 + "px",
          top: 0,
        };
      }
      if (position === "bottom") {
        rt = {
          height: height / 2 + 1 + "px",
          bottom: 0,
        };
      }
      return rt;
    },
    isFirst(id) {
      return (
        this.list.length > 1 && this.list.map((x) => x.id).indexOf(id) === 0
      );
    },
    isLast(id) {
      return (
        this.list.length > 1 &&
        this.list.map((x) => x.id).indexOf(id) === this.list.length - 1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.TreeRight {
  p {
    margin: 0;
    font-size: 13px;
  }
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  .father {
    width: 70px;
    background-color: red;
    padding: 100px 10px;
  }
  .childs {
    .child {
      display: flex;
      flex-direction: row-reverse;
      background-color: #fff;
      .child-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 26rem;
        .childname {
          width: 22rem;
          .content-box {
            text-align: center;
            border: 1px solid #f0c620;
            padding: 3px;
            background-color: #2080b8;
            height: 1.5rem;
            border-radius: 15px;
            width: 100%;
            color: #fff;
            font-size: 1.5rem;
            box-shadow: 0 2px 4px 0 rgba(181, 181, 181, 0.7);
            display: flex;
            justify-content: space-between;
          }
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;
          // width: 220px;
          text-align: center;
          justify-content: center;
          position: relative;
          // padding: 10px 0;
          .position-arrow {
            position: absolute;
            left: -22px;
          }
          .position-top {
            position: absolute;
            width: 3px;
            background-color: #fff;
            left: -23px;
            height: 10px;
          }
        }
        .childarrow {
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
    .child-children {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
