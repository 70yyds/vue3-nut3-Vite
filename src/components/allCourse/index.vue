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
.allCourse {
  width: 90vw;
  margin: 0 auto;

  .courseItem {
    width: 100%;
    height: 25%;
    padding: 10px;
    margin: 15px 0;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(237, 237, 237);
    border-radius: 10px;

    .imgWrap {
      width: 100%;
      height: 60%;
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
        max-height: 160px;
        object-fit: cover;
      }
    }

    .courseInfo {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;

      .left {
        width: 70%;
      }

      :deep(.nut-button--small) {
        height: 1.9rem !important;
      }

      .right {
        width: 25%;
        max-width: 100px;
      }

      .num {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>