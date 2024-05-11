<template>
  <router-view />
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance()

onMounted(() => {

})
</script>
<style lang='scss' scoped></style>