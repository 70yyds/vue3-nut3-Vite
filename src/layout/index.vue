<template>
  <section class="app-main">
    <!-- <Header v-if="isWeChatWeb()" /> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="includeRoute">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
    <Footer />
  </section>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import Header from './components/header'
import Footer from './components/footer'
const { proxy } = getCurrentInstance()
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
});
const includeRoute = ref([])

onMounted(() => {

})
// 判断是否为微信浏览器
const isWeChatWeb = () => {
  let ua = navigator.userAgent.toLowerCase();
  return !/micromessenger/.test(ua)
}
</script>
<style lang='scss' scoped>
.app-main {
  height: 100%;
  background-image: url('@/assets/images/appBack.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>