<template>
  <div class='loginContainer'>
    <div class="login_wrap">
      <div class="login_img pl35">
        <img src="@/assets/images/logo.png">
      </div>
      <div class=" login_tip pl35 pr35 pt10">
        <h1 class="bold">上海开放大学</h1>
        <h3 class="bold" style="color:gray">SHANGHAI OPEN UNIVERSITY</h3>

      </div>
      <nut-form class="login_form pg20">
        <nut-form-item>
          <nut-input class="font16" placeholder="请输入账号" />
        </nut-form-item>
        <nut-form-item>
          <nut-input class="font16" placeholder="请输入密码" type="password" />
        </nut-form-item>
        <nut-form-item>
          <nut-button size="large" type="primary" @click="handleLogin">登录</nut-button>
        </nut-form-item>
      </nut-form>
    </div>
  </div>
</template>
<script setup lang='js'>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import useAppStore from '@/store/modules/app.js'
const { proxy } = getCurrentInstance()
const router = useRouter()
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
});
onMounted(() => {

})
const handleLogin = () => {
  router.push({ path: '/' })
}

</script>
<style lang='scss' scoped>
.loginContainer {
  height: 100%;
  background-image: url('@/assets/images/appBack.png');
  background-repeat: no-repeat;
  background-size: cover;

  .login_wrap {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    :deep(.nut-cell-group__wrap) {
      background: none;
    }

    :deep(.nut-cell) {
      background: none;
    }
  }

  .login_img {}

  .login_tip {}

  .login_form {
    .nut-input {
      border: 1px solid lightgray;
      border-radius: 7px;
      padding: 10px 15px;

      :deep(.nut-input-value) {
        height: 30px;
        line-height: 30px;

        .input-text {
          font-size: 1rem;
        }
      }
    }

    :deep(.nut-cell-group__wrap) {
      box-shadow: none !important;
    }

    .nut-button--round {
      border-radius: 7px;
      background: linear-gradient(to right, #3c80f7, #1058d1);
    }
  }


}
</style>