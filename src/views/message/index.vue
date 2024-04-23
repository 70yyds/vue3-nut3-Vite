<template>
  <div class='msgContainer'>
    this is msg
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
.msgContainer {
  height: 50px;
}
</style>