<template>
  <div
    :style="{
      background: 'rgb(79,79,79)',
      padding: '8px 10px',
      height: '60px',
      opacity: 0.95,
    }"
    class="topEara"
  >
    <el-button
      text
      plain
      class="HomePageButton"
      @click="HomePageClick"
      :style="{
        border: HomePageAppear ? '2px solid white' : 'none',
        color: HomePageAppear ? 'rgb(127,205,0)' : 'white',
      }"
      >首页
      <el-icon v-if="HomePageAppear == false" style="left: 2px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="HomePageAppear == true" style="left: 2px">
        <ArrowUp />
      </el-icon>
    </el-button>
    <el-button
      text
      plain
      class="InformationButton"
      @click="InformationClick"
      :style="{
        border: InformationAppear ? '2px solid white' : 'none',
        color: InformationAppear ? 'rgb(127,205,0)' : 'white',
      }"
      >资讯
      <el-icon v-if="InformationAppear == false" style="left: 2px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="InformationAppear == true" style="left: 2px">
        <ArrowUp />
      </el-icon>
    </el-button>
    <el-button
      text
      plain
      class="CommunityButton"
      @click="CommunityClick"
      :style="{
        border: CommunityAppear ? '2px solid white' : 'none',
        color: CommunityAppear ? 'rgb(127,205,0)' : 'white',
      }"
      >社区
      <el-icon v-if="CommunityAppear == false" style="left: 2px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="CommunityAppear == true" style="left: 2px">
        <ArrowUp />
      </el-icon>
    </el-button>
    <el-button
      text
      plain
      class="SupportButton"
      @click="SupportClick"
      :style="{
        border: SupportAppear ? '2px solid white' : 'none',
        color: SupportAppear ? 'rgb(127,205,0)' : 'white',
      }"
      >支持
      <el-icon v-if="SupportAppear == false" style="left: 2px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="SupportAppear == true" style="left: 2px">
        <ArrowUp />
      </el-icon>
    </el-button>
    <el-button @click="TopicChangeClick" circle class="TopicChangeButton">
      <el-icon style="font-size: 20px; color: whitesmoke">
        <Search />
      </el-icon>
    </el-button>
    <el-dialog
      v-model="TopicChange"
      width="500"
      :close-on-press-escape="true"
      :show-close="false"
    >
      <el-autocomplete
        v-model="Searching"
        :clearable="true"
        :hide-loading="true"
      >
      </el-autocomplete>
    </el-dialog>
  </div>
  <div
    :style="{
      background: 'rgb(180, 200, 152)',
      padding: '16px 16px',
      height: '1200px',
    }"
  >
    <span>实时位置检测</span>
    <span>position:{{ x }},{{ y }}</span>
  </div>
</template>

<script>
import { ArrowDown, ArrowUp, Search } from "@element-plus/icons-vue";
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
// import { useEventListener } from "./event";
export default {
  data() {
    return {};
  },
  components: {
    ArrowDown,
    ArrowUp,
    Search,
  },
  setup() {
    //鼠标追踪,获取坐标值
    const useMouse = () => {
      // 被组合式函数封装和管理的状态
      const x = ref(0);
      const y = ref(0);

      // 组合式函数可以随时更改其状态。
      function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
      }

      // 一个组合式函数也可以挂靠在所属组件的生命周期上
      // 来启动和卸载副作用
      onMounted(() => window.addEventListener("mousemove", update));
      onUnmounted(() => window.removeEventListener("mousemove", update));

      //useEventListener简化组合函数
      //   useEventListener(window, "mousemove", (event) => {
      //     x.value = event.pageX;
      //     y.value = event.pageY;
      //   });

      // 通过返回值暴露所管理的状态
      return { x, y };
    };
    const { x, y } = useMouse();

    //首页按钮
    const HomePageAppear = ref(false);
    const HomePageClick = () => {
      HomePageAppear.value = !HomePageAppear.value;
    };

    //资讯按钮
    const InformationAppear = ref(false);
    const InformationClick = () => {
      InformationAppear.value = !InformationAppear.value;
    };

    //社区按钮
    const CommunityAppear = ref(false);
    const CommunityClick = () => {
      CommunityAppear.value = !CommunityAppear.value;
    };

    //支持按钮
    const SupportAppear = ref(false);
    const SupportClick = () => {
      SupportAppear.value = !SupportAppear.value;
    };

    // 实时监控
    watchEffect(() => {});

    //主题切换
    const TopicChange = ref(false);
    const TopicChangeClick = () => {
      TopicChange.value = !TopicChange.value;
    };

    //搜索
    const Searching = ref("");

    return {
      x,
      y,
      HomePageClick,
      HomePageAppear,
      InformationClick,
      InformationAppear,
      CommunityAppear,
      CommunityClick,
      SupportAppear,
      SupportClick,
      TopicChange,
      TopicChangeClick,
      Searching,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Forum/ForumLess/ForumHomePage.less");
</style>
