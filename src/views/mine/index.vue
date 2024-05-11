<template>
  <div class='appContainer'>
    this is mine
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance()
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
});
onMounted(() => {

})
</script>
<style lang='scss' scoped></style>