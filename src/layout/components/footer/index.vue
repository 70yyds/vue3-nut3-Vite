<template>
  <div class='footerContainer'>
    <nut-tabbar v-model:visible="active" size="18px" unactive-color="#7d7e80" active-color="#1989fa"
      @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" name="home">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="工作台" name="work">
        <template #icon>
          <Category></Category>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="信息" name="message">
        <template #icon>
          <Message></Message>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="我" name="mine">
        <template #icon>
          <My></My>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { Home, Category, Message, My } from '@nutui/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance()
const active = ref('')
onMounted(() => {
  active.value = route.name
})
const tabSwitch = (item, name) => {
  router.push({ path: '/' + name })
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