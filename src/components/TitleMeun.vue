<template>
  <div class="body">
    <!--菜单按钮组件-->
    <!--Meunボタンコンポーネント-->
    <el-button class="button-1" @click="ERP_Click">
      <span ><img src="../assets/Photo/ERP_logo.png" class="icon-1"/></span>
      <span class="character-1"><strong>{{characterFirst}}</strong></span>
    </el-button>
    <el-button class="button-2" @click="MES_Click">
      <span ><img src="../assets/Photo/MES_logo.png" class="icon-2"/></span>
      <span class="character-2"><strong>{{characterSecond}}</strong></span>
    </el-button>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import {ref, inject} from "vue"

export default {
  date() {
    return {};
  },
  components: {
    Search,
  },
  setup(){
    const characterFirst = ref("ERP")
    const characterSecond = ref("MES")
    const MeunTouch = inject('MeunTouch')
    //ERP按钮点击事件  ERPボタンクリックイベント
    const MeunSelect = inject('MeunSelect')
    const ERP_Click =()=>{
      MeunSelect.value = '7'
      MeunTouch.value = false
    }
    //MES按钮点击事件  MESボタンクリックイベント
    const MES_Click =()=>{
      MeunSelect.value = '8'
    }
    return{
        characterFirst,
        characterSecond,
        ERP_Click,
        MeunSelect,
        MES_Click,
        MeunTouch
    }
  }
};
</script>

<style lang="less" scoped>
.body {
  position: relative;
  width: 260px;
  height: 200px;
  padding: 15px;
  background-color: #fafafc;
  z-index: 9999;//堆叠顺序,至于最上层

  .button-1 {
    position: relative;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    top: -5px;
    width: 60px;
    height: 60px;
    background-color:white;

    .icon-1 {
      position: absolute;
      top: -5px;
      left: 2px;
      width: 100%;
      size: 25px;
    }
    .character-1 {
      position: relative;
      top: 18px;
      right: 4px;
      font-size: 12px;
      color: gray;
    }
  }
  .button-1:hover {
    background-color: #fce6fb;
    
  }
  .button-1 span:first-child {
    margin-right: 8px; /* 可以调整间距 */
  }

  .button-2 {
    position: absolute;
    display: flex;
    left: 75px;
    top: 10px;
    width: 60px;
    height: 60px;
    background-color:white;

    .icon-2 {
      position: absolute;
      top: -5px;
      left: 2px;
      width: 100%;
      size: 25px;
    }
    .character-2 {
      position: relative;
      top: 18px;
      left: 1px;
      font-size: 12px;
      color: gray;
    }
  }
  .button-2:hover {
    background-color: #d1e3ca;
  }


}
</style>
