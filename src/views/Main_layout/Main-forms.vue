<template>
  <div id="body">
    <el-container>
      <el-header>
        <!--Title菜单-->
        <!--Titleメニュー-->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :ellipsis="false"
          >
          <el-menu-item index="1" class="menu-item-6">
            <span class="title-label-1"><strong>主页</strong></span>
            <el-icon class="title-icon-1"><HomeFilled /></el-icon>
          </el-menu-item>
          <el-menu-item index="2" class="menu-item-1">
            <span class="title-label-2"><strong>API</strong></span>
            <el-icon class="title-icon-2"><Link /></el-icon>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item-2">
            <span class="title-label-3"><strong>栏目二</strong></span>
            <el-icon class="title-icon-3"><Grid /></el-icon>
          </el-menu-item>
          <el-menu-item index="4" class="menu-item-3">
            <span class="title-label-4"><strong>栏目三</strong></span>
            <el-icon class="title-icon-4"><Coin /></el-icon>
          </el-menu-item>
          <el-menu-item index="5" class="menu-item-4">
            <span class="title-label-5"><strong>栏目四</strong></span>
            <el-icon class="title-icon-5"><Calendar /></el-icon>
          </el-menu-item>
          <el-menu-item index="6" class="menu-item-5">
            <span class="title-label-6"><strong>栏目五</strong></span>
            <el-icon class="title-icon-6"><Money /></el-icon>
          </el-menu-item>
          <div class="div-button-1">
            <el-button class="button-1" @click="show = !show" circle>
              <el-icon><Search /></el-icon>
            </el-button>
            <el-input-group>
              <transition name="fade">
                <el-input
                  v-model="input"
                  v-if="show"
                  type="text"
                  class="input-find"
                  placeholder="Please input"
                  v-focus
                />
              </transition>
              <transition name="fade">
                <el-button v-if="show" class="button-2" @click="enterclick"
                  >Search</el-button
                >
              </transition>
            </el-input-group>
          </div>
          <!-- 创建Title菜单按钮-->
          <!-- Titleメニューボタンを作成--->
          <div class="div-button-3">
            <el-button
              class="button-4"
              circle
              @mouseenter="Touch"
              @mouseleave="TouchLeave"
            >
              <el-icon><icon-menu /></el-icon>
            </el-button>
            <TitleMeun v-if="MeunTouch" @mouseenter="MeunsTouch" @mouseleave="MeunTouchLeave" />
          </div>
          <!--创建用户设置按钮-->
          <!--ユーザー設定ボタンの作成-->
          <div class="div-button-2">
            <el-button class="button-3" @click="Create_account = true" circle >
              <el-icon><UserFilled /></el-icon>
            </el-button>
            <Account_Form v-model="Create_account" />
          </div>
          <div class="div-button-6">
            <el-button class="button-6" @click="TEXTPUT" circle>
              <el-icon><Bicycle /></el-icon>
            </el-button>
          </div>
          <!--创建设置按钮-->
          <!--設定ボタンの作成-->
          <div class="div-button-7">
            <el-button class="button-7" @click="TEXTPUT" circle>
              <el-icon><Setting /></el-icon>
            </el-button>
          </div>
          <div class="div-button-4">
            <el-button class="button-5"> </el-button>
          </div>
          <!--主题切换-->
          <!--トピックの切り替え-->
          <div class="div-button-5">
            <el-switch
              v-model="isDarkTheme"
              size="middle"
              @change="toggleDark()"
              style="--el-switch-on-color: gray"
            >
              <template #active-action>
                <el-icon style="color: midnightblue"><Moon /></el-icon>
              </template>
              <template #inactive-action>
                <el-icon style="color: firebrick"><Sunny /></el-icon>
              </template>
            </el-switch>
          </div>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="130px">
          <el-row class="row-menu">
            <el-col :span="12">
              <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon class="left-icon-1"><location /></el-icon>
                    <span class="left-label-1">侧栏一</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1" style="justify-content: center"
                      >item one</el-menu-item
                    >
                    <el-menu-item index="1-2" style="justify-content: center"
                      >item two</el-menu-item
                    >
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3" style="justify-content: center"
                      >item three</el-menu-item
                    >
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon class="left-icon-2"><icon-menu /></el-icon>
                  <span class="left-label-2">侧栏二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon class="left-icon-3"><document /></el-icon>
                  <span class="left-label-3">侧栏三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon class="left-icon-4"><setting /></el-icon>
                  <span class="left-label-4">侧栏四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <MainPage v-if="MeunSelect == '1'" />
          <ERP_Page v-if="MeunSelect == '7'" />
          <h2 v-if="MeunSelect == '8'">efgh</h2>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Search,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  UserFilled,
  Sunny,
  Moon,
  Bicycle,
  HomeFilled,
  Link,
  Grid,
  Coin,
  Calendar,
  Money,
} from "@element-plus/icons-vue";
import { ref , provide  } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import Account_Form from "../../components/Account_Form.vue";
import { useRoute } from "vue-router";
import TitleMeun from "../../components/TitleMeun.vue";
import ERP_Page from "../Main_ButtonPage/ERP_Page.vue";
import MainPage from '../TitlePage/MainPage.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const activeIndex = ref('1');



export default {
  data() {
    return {
      show: false,
      input: "",
      isDarkTheme: false,
      Create_account: false,
      // MeunTouch: false,
    };
  },
  components: {
    Search,
    Document,
    IconMenu,
    Location,
    Setting,
    UserFilled,
    Sunny,
    Moon,
    Bicycle,
    HomeFilled,
    Link,
    Grid,
    Coin,
    Calendar,
    Money,
    Account_Form,
    TitleMeun,
    ERP_Page,
    MainPage,
  },
  directives: {
    focus: {
      // 当绑定元素插入时触发
      inserted(el) {
        el.focus();
      },
    },
  },
  setup() {
    //Meun选择事件  Meun選択イベント
    function handleSelect(index) {
      activeIndex.value = index;
      MeunSelect.value = index;
    }
    // //Meun初始化选择  Meun初期化選択
    // const dialogclose = () => {
    //   activeIndex.value = "1";
    // };
    //创建路由实例   ルーティングインスタンスの作成
    const route = useRoute();
    console.log(route);
    const MeunTouch = ref(false)
    provide('MeunTouch',MeunTouch)
    const MeunisTouched = ref(false)
    const MeunButton_isTouched = ref(false)
    //Meun按钮鼠标离开事件  Meunボタンマウス離脱イベント
    const TouchLeave=()=>{
      MeunButton_isTouched.value = false;
      console.log(MeunButton_isTouched.value)
      if(MeunButton_isTouched.value == false && MeunisTouched.value == false){
        MeunTouch.value = !MeunTouch.value
      }
    }
    //Meun按钮鼠标进入事件  Meunボタンマウスがイベントに入る
    const Touch = ()=>{
      MeunButton_isTouched.value = true;
      console.log(MeunButton_isTouched.value)
      MeunTouch.value = !MeunTouch.value
    }
    //Meun菜单鼠标进入事件  Meunメニューマウス入力イベント
    const MeunsTouch=()=>{
      MeunTouch.value = true
    }
    //Meun菜单鼠标离开事件  Meunメニューマウス離脱イベント
    const MeunTouchLeave=()=>{
      MeunTouch.value = !MeunTouch.value
    }
    //Meun各Page判断变量定义  Meun各Page判定変数定義
    const MeunSelect = ref('1');
    // const ERP_button = reactive({button_click: false})
    provide('MeunSelect',MeunSelect)
    // const MES_button = reactive({button_click: false})

    return {
      handleSelect,
      toggleDark,
      MeunTouch,
      Touch,
      TouchLeave,
      MeunisTouched,
      MeunButton_isTouched,
      MeunsTouch,
      MeunTouchLeave,
      MeunSelect,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Main_layout/Main-forms.less");
</style>
