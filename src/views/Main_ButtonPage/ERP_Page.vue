<template>
  <iframe :src="WebUrl" width="100%" height="99%" ></iframe>
</template>

<script>
import {ref} from "vue"
export default {
  date() {
    return {};
  },
  components: {

  },
  setup() {
    const WebUrl = ref('http://10.100.50.216:8080/webroot/decision/login')
    return {
      WebUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../Main_ButtonPage/less/ERP_Page.less");
</style>
