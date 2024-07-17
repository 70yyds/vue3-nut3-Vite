<template>
  <div class='appContainer'>
    <div class="mine_header">
      <div class="header_avatar">
        <img src="@/assets/images/avatar.jpg" alt="" width="100%" height="100%" @error="errorImage">
        <div class="mine_info bold font19">
          <div class="userName">POMELO</div>
          <div class="userRole font16">学生</div>
        </div>
        <div class="class_num mt25">
          <div class="header_list text-center">
            <div class="bold font17">26</div>
            <div class="font15">已收藏</div>
          </div>
          <div class="header_list text-center">
            <div class="bold font17">27</div>
            <div class="font15">正在学习</div>
          </div>
          <div class="header_list text-center">
            <div class="bold font17">28</div>
            <div class="font15">已学习</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mine_body">
      <ul>
        <li class="list_item">
          <div class="title">
            <People />
            <div class="ml20 truncate">个人信息</div>
          </div>
          <RectRight />
        </li>
        <li class="list_item">
          <div class="title">
            <Retweet />
            <div class="ml20 truncate">角色切换</div>
          </div>
          <RectRight />
        </li>
        <li class="list_item">
          <div class="title">
            <Setting />
            <div class="ml20 truncate">设置</div>
          </div>
          <RectRight />
        </li>
        <li class="list_item" @click="logOut">
          <div class="title">
            <Find />
            <div class="ml20 truncate">退出登录</div>
          </div>
          <RectRight />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { People, Retweet, Setting, RectRight, Find } from '@nutui/icons-vue'
import useUserStore from '@/store/modules/user.js'
const userStore = useUserStore()
const { proxy } = getCurrentInstance()

onMounted(() => {

})

const logOut = () => {
  userStore.Logout()
}

const errorImage = (event) => {
  event.target.src = new URL(`@/assets/images/avatar.jpg`, import.meta.url).href
}
</script>
<style lang='scss' scoped>
@import './index.scss';
</style>