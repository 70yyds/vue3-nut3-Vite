<template>
  <div class='workContainer'>
    this is work
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
<style lang='scss' scoped>
.workContainer {
  height: 50px;
}
</style>