<template>
  <div id="body">
    <div class="main">
      <div class="QR-CODE" @click="QDLogin">
        <div class="imgqr"></div>
      </div>
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
        style="position: relative; top: -65px"
      >
        <el-tab-pane label="账号密码登录" name="first">
          <div class="title">
            <strong>{{ Login_title }}</strong>
          </div>
          <div class="Line-text">
            <label
              style="
                font-size: 12px;
                position: relative;
                top: 290px;
                left: 70px;
                color: grey;
              "
              ><strong>———————— 第三方登录 ————————</strong></label
            >
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
              @click="ForgetPass"
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
        </el-tab-pane>
        <el-tab-pane label="手机验证登录" name="second"> </el-tab-pane>
        <el-tab-pane label="二维码登录" name="third" v-if="QRAllow">
        </el-tab-pane>
      </el-tabs>
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
import { ElMessage,ElMessageBox} from "element-plus";
import { ref, reactive ,watchEffect} from "vue";
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
    const activeName = ref("first");
    const isActive = ref(false);

    //登录事件  ログインイベント
    const enterLogin = async () => {
      try {
        const res = await getLoginApi({
          Username: Account_inf.Username,
          password: Account_inf.password,
        });

        let flag = res.data.msg;
        if (flag == "OK") {
          ElMessage({
            message: "login success",
            type: "success",
          });
          //路由跳转,带出登录的工号信息
          router.push({
            path: "/HomePage",
            query: { UserNum_only: Account_inf.Username },
          });
        } else {
          ElMessage({
            message: "login fail, please try again",
            type: "warning",
          });
        }
        console.log("res message is ", res.data);
      } catch (error) {
        console.error(error);
      }
    };
    //忘记密码
    const ForgetPass=()=>{
      ElMessageBox({
        title:'Notices',
        message:'是不是忘记密码了?V50改一次密码',//弹窗内容
        confirmButtonText: '确定', // 确定按钮文本
        closeOnClickModal: false, // 是否可通过点击遮罩关闭弹框
        type: 'warning' // 消息类型，用于显示图标
      }).then(()=>{
        ElMessage.success('长点记性'); // 用户点击确定后显示的消息
      })
    }

    //扫码登录
    const QRAllow = ref(false);
    const QDLogin = () => {
      activeName.value = ref("third");
      if(isActive.value == false){
        isActive.value = !isActive.value;
      }
    };
    //扫码图标状态更改
    const QDChange = ()=>{
      if(activeName.value == 'first' && isActive.value == true){
        isActive.value = !isActive.value;
      }
      else if(activeName.value == 'second' && isActive.value == true){
        isActive.value = !isActive.value;
      }
    }
    //监听
    watchEffect(() => {
      QDChange();
    });


    return {
      Account_inf,
      checked,
      enterLogin,
      Login_title,
      LoginIn,
      activeName,
      QDLogin,
      QRAllow,
      isActive,
      watchEffect,
      ForgetPass,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Login/Login.less");
.imgqr {
  width: 60px;
  height: 60px;
  background: linear-gradient(225deg, transparent 42px, v-bind("isActive? 'transparent':'#e7edf1'") 0)
}
</style>
