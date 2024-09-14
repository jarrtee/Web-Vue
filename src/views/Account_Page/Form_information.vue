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
      <img :src="GetData.UserPicture" class="Picture_User" />
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
      <input
        type="text"
        class="User_input"
        :disabled="InputVerify"
        :value="GetData.BasicName"
      />
      <input
        type="text"
        class="User_input1"
        :disabled="InputVerify"
        :value="GetData.BasicNum"
      />
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
import { ref, onMounted, reactive } from "vue";
import { BasicInfApi } from "@/Api";

export default {
  date() {
    return {};
  },
  setup() {
    //变量定义  変数定義
    const GetData = reactive({
      BasicName: null,
      BasicNum: null,
      UserPicture: null,
    });
    // const User_Picture = new URL("@/assets/Photo/picture2.jpg", import.meta.url).href; // TS 创建URL
    const FileInput = ref(null);
    const InputVerify = ref(true);

    //获取后端用户的基本信息
    const getlyb = async () => {
      //接收后端数据
      await BasicInfApi({ UserNum: "GD1233" })
        .then(function (res) {
          // 处理成功情况
          GetData.BasicName = res.data[0].fields.UserName;
          GetData.BasicNum = res.data[0].fields.UserNum;
          //BLOB二进制转换为URL地址
          let PhotoURL = URL.createObjectURL(
            new Blob([res.data[0].fields.UserNum])
          );
          GetData.UserPicture = PhotoURL;
          console.log(res);
          console.log(GetData.UserPicture);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .finally(function () {
          // 总是会执行
        });
    };

    const downloadFile = async () => {
      const response = await fetch("./assets/Photo/picture2.jpg");
      const blob = await response.blob();
      GetData.UserPicture = URL.createObjectURL(blob);

      const newWindow = window.open();
      if (newWindow) {
        newWindow.location.href = GetData.UserPicture;
      } else {
        // 处理新窗口被阻止打开的情况
        URL.revokeObjectURL(GetData.UserPicture);
      }
    };

    onMounted(() => {
      getlyb();
      downloadFile();
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
        GetData.UserPicture = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    //编辑按钮定义
    const infEdit = () => {
      InputVerify.value = !InputVerify.value;
    };

    return {
      Picture_Exchange,
      handleImageChange,
      FileInput,
      InputVerify,
      infEdit,
      GetData,
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
