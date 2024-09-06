<template>
    <el-dialog
      width="700"
      draggable="true"
      close-on-press-escape="true"
      :modal="false"
      :close-on-click-modal="false"
      class="dialog-form"
      @close="dialogclose"
    >
      <template #header>
        <div class="custom-header">
          <span>用户管理</span>
        </div>
      </template>
      <el-container class="layout-container-demo">
        <el-aside width="100px">
          <el-row class="row-menu">
            <el-col :span="24">
              <el-menu
                :default-active="defaultactive"
                class="el-menu-vertical-demo"
                @select="indexselect"
                @open="handleOpen"
                @close="handleClose"
                
              >
                <el-menu-item index="1" >
                  <el-icon class="left-icon-1"><EditPen /></el-icon>
                  <span class="left-label-1"><strong>基础信息</strong></span>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-icon class="left-icon-1"><User /></el-icon>
                  <span class="left-label-1"><strong>添加用户</strong></span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon class="left-icon-1"><Memo /></el-icon>
                  <span class="left-label-1"><strong>权限管理</strong></span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon class="left-icon-1"><Bell /></el-icon>
                  <span class="left-label-1"><strong>通知</strong></span>
                </el-menu-item>
                <el-menu-item index="5">
                  <el-icon class="left-icon-1"><Setting /></el-icon>
                  <span class="left-label-1"><strong>设置</strong></span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <Forminformation v-if="MeunSelect == '1'" />
        </el-main>
      </el-container>
    </el-dialog>
</template>

<script>
import { Setting, User, EditPen, Memo, Bell } from "@element-plus/icons-vue";
import { ref} from "vue";
import { useRouter } from 'vue-router'
import Forminformation from "../views/Account_Page/Form_information.vue"

export default {
  date() {
    return {
      Add_account: false,
      label_1:false,
      label_2:false,
    };
  },
  components: {
    Setting,
    User,
    EditPen,
    Memo,
    Bell,
    Forminformation,
  },
  setup() {
    const route = useRouter();
    const defaultactive = ref("1");
    //Meun初始化选择  Meun初期化選択
    const dialogclose = () => {
      defaultactive.value = "1";
    };
    //Meun选择事件  Meun選択イベント
    const indexselect = (index) => {
      defaultactive.value = index;
      MeunSelect.value = index;
      
    };
    //Meun选择页跳转变量定义  Meunページジャンプ変数定義の選択
    const MeunSelect = ref('1')

    return {
      defaultactive,
      dialogclose,
      indexselect,
      route,
      MeunSelect
    };
  },
};
</script>

<style lang="less" scoped>
// .Vue3Barcode path,
// .Vue3Barcode rect {
//   overflow: visible;
// }
@import url("./Less/Account_From.less");
</style>
