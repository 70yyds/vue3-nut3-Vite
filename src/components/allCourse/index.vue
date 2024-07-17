<template>
  <div class='allCourse'>
    <div class="courseItem" v-for="(item, index) in list" :key="item.id">
      <div class="imgWrap mb10">
        <img src="@/assets/images/courseDemo.png" alt="">
      </div>
      <div class="courseInfo">
        <div class="left">
          <div class="courseName truncate bold pb15">THIS IS NAME</div>
          <div class="num">
            <span class="pr20 font14">
              <Order />
              <span class="pl5">16节课程</span>
            </span>
            <span class="font14">
              <Fabulous />
              4.9k
            </span>
          </div>
        </div>
        <nut-button class="right" type="primary" size="small"><span class="font15 bold">START</span></nut-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { Fabulous, Order } from '@nutui/icons-vue'
const { proxy } = getCurrentInstance()
const props = defineProps(['list']);
onMounted(() => {

})
</script>
<style lang='scss' scoped>
@import './index.scss';
</style>