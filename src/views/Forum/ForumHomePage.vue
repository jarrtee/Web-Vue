<template>
  <div
    :style="{
      background: 'rgb(180, 200, 222)',
      padding: '11px 16px',
      height: '25px',
    }"
    class="topEara"
  >
    <span>DDDDDDDDDDDDDD</span>
  </div>
  <div
    :style="{
      background: 'rgb(180, 200, 152)',
      padding: '16px 16px',
      height: '1200px',
    }"
  >
    <h2>position:{{ x }},{{ y }}</h2>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
// import { useEventListener } from "./event";
export default {
  data() {
    return {};
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
    return {
      x,
      y,
    };
  },
};
</script>

<style lang="less" scoped>
.topEara {
  position: -webkit-sticky;
  position: sticky;
  z-index: 1000;
  top: 0px;
}
</style>
