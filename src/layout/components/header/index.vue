<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" left-show fixed :z-index="1" safe-area-inset-top
    :title="route.meta.title">
    <!-- <template #left>
        <div>返回</div>
      </template> -->
    <template #right>
      <Share />
    </template>
  </nut-navbar>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { Share } from '@nutui/icons-vue'
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
.nut-navbar--placeholder {
  height: 44px !important;
}

:deep(.nut-navbar) {
  margin-bottom: 0px;
  box-shadow: 0 1px 7px #edeef1;
}
</style>