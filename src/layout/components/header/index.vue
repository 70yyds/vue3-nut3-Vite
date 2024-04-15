<template>
  <div class='headerContainer'>
    <nut-navbar @on-click-back="back" @on-click-title="title" :title="route.meta.title">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <nut-icon class="right" name="share-n"></nut-icon>
      </template>
    </nut-navbar>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const { proxy } = getCurrentInstance()
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
});
onMounted(() => {

})
const title = () => {

}
const back = () => {

}
</script>
<style lang='scss' scoped>
.headerContainer {}
</style>