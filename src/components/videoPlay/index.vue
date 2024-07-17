<template>
  <div id="videoContainer" ref="videoContainer" class="video-item" />
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeMount, watch, onUnmounted } from 'vue';
import DPlayer from 'dplayer';
//import Hls from 'hls.js' //直播插件
const emit = defineEmits(['finishPlay'])
const props = defineProps<{
  source: string,
  coverImg?: string,
  type?: string
}>();

const videoContainer = ref();
const dpPlayer = ref<any>();

watch(() => props.source, () => {
  dpPlayer.value && dpPlayer.value.destroy();
  initPlayer();
})

onMounted(() => {
  initPlayer();

  let videoDom = document.getElementById('videoContainer')
  videoDom && videoDom.addEventListener('contextmenu', event => event.preventDefault());
});
onUnmounted(() => {
  let videoDom = document.getElementById('videoContainer')
  videoDom && videoDom.removeEventListener('contextmenu', event => event.preventDefault());
})
const initPlayer = () => {
  dpPlayer.value = new DPlayer({
    container: videoContainer.value,
    lang: 'zh-cn',
    contextmenu: [],
    // live: props.type == 'live' ? true : false,
    video: {
      url: props.source,
      // type: props.type == 'live' ? 'customHls' : '',
      pic: props.coverImg ? props.coverImg : '',// 封面图片
      // 直播
      // customType: {
      //   customHls: function (video, player) {
      //     const hls = new Hls();
      //     hls.loadSource(video.src);
      //     hls.attachMedia(video);
      //   },
      // }
    },
    // subtitle: {url: ''} // 字幕
    autoplay: true
  })
  dpPlayer.value.on('ended', function () {
    emit('finishPlay', true)
  });
}

onBeforeMount(() => {
  dpPlayer.value && dpPlayer.value.destroy();
})
</script>

<style scoped>
.video-item {
  width: 100%;
  height: 100%;
}

:deep(.dplayer-menu) {
  display: none !important;
}
</style>