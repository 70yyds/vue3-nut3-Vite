<template>
  <div class='appContainer'>
    <div style="height: 10%;"></div>
    <div style="height: 90%;">
      <div class="bold font25 ml30" style="height: 5%;">All Courses</div>
      <div style="height: 95%;overflow: auto;">
        <AllCourse :list="courseList" />
      </div>
    </div>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import AllCourse from '@/components/allCourse'
const { proxy } = getCurrentInstance()
const courseList = ref([
  {
    id: 1,
    total: 16,
    start: 4.9,
    name: 'THIS IS NAME'
  },
  {
    id: 12,
    total: 16,
    start: 4.9,
    name: 'THIS IS NAME'
  },
  {
    id: 13,
    total: 16,
    start: 4.9,
    name: 'THIS IS NAME'
  },
  {
    id: 14,
    total: 16,
    start: 4.9,
    name: 'THIS IS NAME'
  }
])
onMounted(() => {

})
</script>
<style lang='scss' scoped></style>