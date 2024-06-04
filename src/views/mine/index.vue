<template>
  <div class='appContainer'>
    <div class="mine_header">
      <div class="mine_avatar">
        <img src="@/assets/images/avatar.jpg" alt="" width="100%" height="100%" @error="errorImage">
        <div class="mine_name mt5 font15">
          POMELO
        </div>
      </div>
    </div>
    <div class="mine_body">
      <ul>
        <li class="list_item">
          <div class="title">
            <nut-icon name="people"></nut-icon>
            <div class="ml20 truncate">个人信息</div>
          </div>
          <nut-icon name="rect-right"></nut-icon>
        </li>
        <li class="list_item">
          <div class="title">
            <nut-icon name="retweet"></nut-icon>
            <div class="ml20 truncate">角色切换</div>
          </div>
          <nut-icon name="rect-right"></nut-icon>
        </li>
        <li class="list_item">
          <div class="title">
            <nut-icon name="setting"></nut-icon>
            <div class="ml20 truncate">设置</div>
          </div>
          <nut-icon name="rect-right"></nut-icon>
        </li>
      </ul>
    </div>
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
const errorImage = (event) => {
  event.target.src = new URL(`@/assets/images/avatar.jpg`, import.meta.url).href
}
</script>
<style lang='scss' scoped>
.appContainer {
  position: relative;

  .mine_header {
    height: 45%;
    background: url('@/assets/images/mine_back.png') no-repeat;
    background-size: cover;
    position: relative;

    .mine_avatar {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);

      img {
        max-width: 8rem;
        border-radius: 50%;
      }

      .mine_name {
        text-align: center;
        color: white;
      }
    }
  }

  .mine_body {
    height: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    margin-top: -2rem;
    background-color: #fff;
    position: relative;

    ul {
      padding: 1rem 2rem;
    }

    .list_item {
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;

      .title {
        width: 85%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>