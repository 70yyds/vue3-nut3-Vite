<template>
  <div class='footerContainer'>
    <nut-tabbar v-model:visible="active" size="18px" @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="工作台" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="信息" icon="message"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance()
const active = ref()
onMounted(() => {
})
const tabSwitch = (item, index) => {
  switch (index) {
    case 0:
      router.push({ path: '/home' })
      break;
    case 1:
      router.push({ path: '/work' })
      break;
    case 2:
      router.push({ path: '/message' })
      break;
    case 3:
      router.push({ path: '/mine' })
      break;

    default:
      break;
  }
}
</script>
<style lang='scss' scoped>
.footerContainer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: rgba(128, 128, 128, 0.256);
  z-index: 1;
}
</style>