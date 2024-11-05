<template>
  <div
    :style="{
      background: 'rgb(79,79,79)',
      height: '60px',
      opacity: 0.98,
    }"
    class="topEara"
  >
    <el-button class="TitlePhoto" />
    <el-button
      text
      plain
      class="HomePageButton"
      @click="HomePageClick"
      :style="{
        border: HomePageAppear ? '2px solid white' : 'none',
        color: HomePageAppear ? 'rgb(127,205,0)' : 'white',
      }"
      ><label style="position: relative; top: 4px; cursor: pointer">首页</label>
      <el-icon v-if="HomePageAppear == false" style="left: 2px; width: 12px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="HomePageAppear == true" style="left: 2px; width: 12px">
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
      ><label style="position: relative; top: 4px; cursor: pointer">资讯</label>
      <el-icon v-if="InformationAppear == false" style="left: 2px; width: 12px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="InformationAppear == true" style="left: 2px; width: 12px">
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
      ><label style="position: relative; top: 4px; cursor: pointer">社区</label>
      <el-icon v-if="CommunityAppear == false" style="left: 2px; width: 12px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="CommunityAppear == true" style="left: 2px; width: 12px">
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
      ><label style="position: relative; top: 4px; cursor: pointer">支持</label>
      <el-icon v-if="SupportAppear == false" style="left: 2px; width: 12px">
        <ArrowDown />
      </el-icon>
      <el-icon v-if="SupportAppear == true" style="left: 2px; width: 12px">
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
    <transition name="fade">
      <div class="TopicOne" v-if="DropDownMeun"></div>
    </transition>
  </div>

  <div
    :style="{
      background: 'rgb(28, 28, 28)',
      padding: '16px 16px',
      height: '1200px',
    }"
    @click="OutTopicTwo"
    class="buttomEara"
  >
    <el-carousel :interval="4000" type="card" height="360px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
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

    //title
    const DropDownMeun = ref(false);
    //首页按钮
    const HomePageAppear = ref(false);
    const HomePageClick = () => {
      if (DropDownMeun.value) {
        if (HomePageAppear.value) {
          DropDownMeun.value = !DropDownMeun.value;
          HomePageAppear.value = !HomePageAppear.value;
        } else {
          HomePageAppear.value = !HomePageAppear.value;
          const list = [InformationAppear, CommunityAppear, SupportAppear];
          list.forEach((list) => {
            list.value = false;
          });
        }
      } else {
        DropDownMeun.value = !DropDownMeun.value;
        HomePageAppear.value = !HomePageAppear.value;
      }
    };

    //资讯按钮
    const InformationAppear = ref(false);
    const InformationClick = () => {
      if (DropDownMeun.value) {
        if (InformationAppear.value) {
          DropDownMeun.value = !DropDownMeun.value;
          InformationAppear.value = !InformationAppear.value;
        } else {
          InformationAppear.value = !InformationAppear.value;
          const list = [HomePageAppear, CommunityAppear, SupportAppear];
          list.forEach((list) => {
            list.value = false;
          });
        }
      } else {
        DropDownMeun.value = !DropDownMeun.value;
        InformationAppear.value = !InformationAppear.value;
      }
    };

    //社区按钮
    const CommunityAppear = ref(false);
    const CommunityClick = () => {
      if (DropDownMeun.value) {
        if (CommunityAppear.value) {
          DropDownMeun.value = !DropDownMeun.value;
          CommunityAppear.value = !CommunityAppear.value;
        } else {
          CommunityAppear.value = !CommunityAppear.value;
          const list = [InformationAppear, HomePageAppear, SupportAppear];
          list.forEach((list) => {
            list.value = false;
          });
        }
      } else {
        DropDownMeun.value = !DropDownMeun.value;
        CommunityAppear.value = !CommunityAppear.value;
      }
    };

    //支持按钮
    const SupportAppear = ref(false);
    const SupportClick = () => {
      if (DropDownMeun.value) {
        if (SupportAppear.value) {
          DropDownMeun.value = !DropDownMeun.value;
          SupportAppear.value = !SupportAppear.value;
        } else {
          SupportAppear.value = !SupportAppear.value;
          CommunityAppear.value = !CommunityAppear.value;
          const list = [InformationAppear, HomePageAppear, CommunityAppear];
          list.forEach((list) => {
            list.value = false;
          });
        }
      } else {
        DropDownMeun.value = !DropDownMeun.value;
        SupportAppear.value = !SupportAppear.value;
      }
    };
    //div外Topic隐藏
    const OutTopicTwo = () => {
      const list = [
        SupportAppear,
        InformationAppear,
        CommunityAppear,
        HomePageAppear,
        DropDownMeun,
      ];
      list.forEach((item) => {
        item.value = false;
      });
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
      DropDownMeun,
      OutTopicTwo,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Forum/ForumLess/ForumHomePage.less");
</style>
