<template>
  <el-form :model="form" label-width="auto" style="max-width: 550px">
    <div class="left">
      <el-form-item
        label="头像"
        style="position: relative; left: 10px; top: 3px; font-weight: bolder"
      >
      </el-form-item>
      <el-form-item
        label="用户名"
        style="position: relative; top: 70px; left: 16px; font-weight: bolder"
      >
      </el-form-item>
      <el-form-item
        label="工号"
        style="position: relative; top: 70px; left: 15px; font-weight: bolder"
      >
      </el-form-item>
      <el-form-item
        label="手机号"
        style="position: relative; top: 70px; left: 16px; font-weight: bolder"
      >
      </el-form-item>
    </div>
    <div class="middle">
      <img :src="User_Picture" class="Picture_User" />
      <el-button
        @click="Picture_Exchange"
        plain
        style="
          position: relative;
          right: 90px;
          top: 28px;
          height: 20px;
          width: 60px;
          font-size: small;
        "
      >
        <strong>更换头像</strong>
      </el-button>
      <input
        type="file"
        @change="handleImageChange"
        style="display: none"
        ref="FileInput"
      /><!--文件类型用于上传图片-->
      <input type="text" class="User_input" :disabled="InputVerify" />
      <input type="text" class="User_input1" :disabled="InputVerify" />
    </div>
    <div class="right">
      <el-button
        plain
        @click="infEdit"
        style="
          position: relative;
          width: 40px;
          height: 20px;
          font-size: 14px;
          left: 120px;
          top: -10px;
        "
      >
        <strong>编辑</strong>
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
// import { BasicInfApi } from "@/Api";
import axios from "axios";

export default {
  date() {
    return {};
  },
  setup() {
    //变量定义  変数定義
    const state = reactive({
      lists: [],
    });
    const User_Picture = new URL("@/assets/Photo/picture1.jpg", import.meta.url).href; // TS 创建URL
    const FileInput = ref(null);
    const InputVerify = ref(true);

    let base_url = "http://127.0.0.1:8000/api/dj_api/";
    const getlyb = () => {
      axios
        .get(base_url)
        .then((res) => {
          state.lists = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {
      getlyb();
    });

    //Picture更改事件  Picture変更イベント
    const Picture_Exchange = () => {
      FileInput.value.click();
    };
    //input(File类型)图片上传事件  画像アップロードイベント
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        User_Picture.value = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    //编辑按钮定义
    const infEdit = () => {
      InputVerify.value = !InputVerify.value;
    };

    return {
      state,
      User_Picture,
      Picture_Exchange,
      handleImageChange,
      FileInput,
      InputVerify,
      infEdit,

    };
  },
};
</script>

<style lang="less" scoped>
.left {
  float: left;
  width: 13%;
  height: 100%;
  // background-color: aqua;
}
.middle {
  float: left;
  width: 35%;
  height: 100%;
  // background-color: red;

  .User_input {
    position: relative;
    width: 160px;
    height: 20px;
    top: 15px;
    right: 16px;
    border: 1px solid gray;
  }
  .User_input1 {
    position: relative;
    width: 160px;
    height: 20px;
    right: 16px;
    top: 20px;
    border: 1px solid gray;
  }
}
.Picture_User {
  width: 80px;
  height: 80px;
  position: relative;
  top: 10px;
  right: 20px;
  border: 1px solid gray;
}
.right {
  // background-color: aqua;
  float: right;
  width: 52%;
  height: 100%;
}
</style>
