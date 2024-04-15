<template>
  <section class="app-main">
    <Header />
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
</script>
<style lang='scss' scoped>
.app-main {}
</style>