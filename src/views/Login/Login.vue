<template>
  <div id="body">
    <div class="main">
      <div class="title">
        <strong>{{ Login_title }}</strong>
      </div>
      <div class="button_control">
        <el-button type="primary" circle>
          <el-icon><Edit /></el-icon>
        </el-button>
        <el-button type="success" circle>
          <el-icon><Check /></el-icon>
        </el-button>
        <el-button type="info" circle>
          <el-icon><Message /></el-icon>
        </el-button>
      </div>
      <div class="input-1">
        <el-tag
          style="
            position: relative;
            right: 22px;
            font-size: 14px;
            color: purple;
          "
          ><strong>用户名</strong></el-tag
        >
        <el-input
          v-model="Account_inf.Username"
          style="width: 240px"
          placeholder="Usernasme"
          v-on:keyup.enter="enterLogin"
          prefix-icon="UserFilled"
        />
      </div>
      <div class="input-2">
        <el-tag
          style="
            position: relative;
            right: 22px;
            font-size: 14px;
            color: purple;
          "
          ><strong>密码</strong></el-tag
        >
        <el-input
          v-model="Account_inf.password"
          style="width: 240px; left: 7px"
          placeholder="Password"
          v-on:keyup.enter="enterLogin"
          type="password"
          :show-password="true"
          prefix-icon="Lock"
        />
      </div>
      <div class="button-forget">
        <el-button
          plain
          text
          style="font-size: 12px; padding: 8px"
          class="forget_password"
          ><strong>忘记密码?</strong></el-button
        >
        <el-checkbox
          v-model="checked"
          label="是否保持登录状态"
          style="font-size: 10px; left: 40px; font-weight: bolder"
        />
        <!-- font-weight：设置字体样式/bolder：加粗 -->
      </div>
      <div class="button-login">
        <el-button
          type="primary"
          round
          style="width: 180px"
          class="login"
          @click="enterLogin"
          >{{ LoginIn }}</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import {
  Edit,
  Check,
  Message,
  View,
  Hide,
  UserFilled,
  Lock,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
// import axios from 'axios'
// import $ from 'jquery'

import { getLoginApi } from "@/Api";


export default {
  date() {
    return {};
  },
  mounted() {},
  components: {
    Edit,
    Check,
    Message,
    View,
    Hide,
    UserFilled,
    Lock,
  },
  setup() {
    //变量定义   変数定義
    const Login_title = ref("welcome to"); //NGTB MGT
    const checked = ref("false");
    const Account_inf = reactive({
      Username: "",
      password: "",
    });
    const LoginIn = ref("Login In");
    const router = useRouter();

    //登录事件  ログインイベント
    const enterLogin = async () => {
      try{
      const res = await getLoginApi({Username:Account_inf.Username,password:Account_inf.password})
      let flag = res.data.msg;
      if (flag == "OK") {
        ElMessage({
          message: "login success",
          type: "success",
        });
        router.push("/HomePage");
      } else {
        ElMessage({
          message: "login fail, please try again",
          type: "warning",
        });
      }
      console.log("res message is ", res.data);
      }catch(error){
        console.error(error);
      }
    };

    return {
      Account_inf,
      checked,
      enterLogin,
      Login_title,
      LoginIn,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Login/Login.less");
</style>
