<template>
  <div class='appContainer'>
    <router-view />
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance()

onMounted(() => {

})
</script>
<style lang='scss' scoped>
.appContainer {}
</style>