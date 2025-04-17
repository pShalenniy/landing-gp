<template>
  <div>
    <div class="section-img">
      <app-image
        class="section-img__preview"
        alt="Built specifically to enhance TMC revenues"
        src="/images/home/benefits/Vid.png"
      ></app-image>
      <button v-if="!isPlayer" class="section-img__play" @click="playVideo">
        <Play />
      </button>
    </div>

    <div class="popup" :class="{ show: isPlayer }" @click="bgClick($event)">
      <div class="popup__video">
        <vue-vimeo-player
          class="section-img__video"
          video-id="497636643"
          :options="{
            mute: true,
            loop: true,
            byline: false,
            playsinline: true,
            height: 565,
            width: 1000
          }"
          ref="player"
        ></vue-vimeo-player>

        <button class="popup__close" @click="stopVideo">
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player';
import Play from '@/images/play.svg';
export default {
  name: 'HowItWorksVideo',
  components: {
    vueVimeoPlayer,
    Play
  },
  data: () => ({
    isPlayer: false
  }),
  methods: {
    playVideo() {
      this.isPlayer = true;
      this.$refs.player.play();
    },
    stopVideo() {
      this.isPlayer = false;
      this.$refs.player.pause();
    },
    bgClick(e) {
      e.stopPropagation();
      this.stopVideo();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/__utils';
.section-img {
  display: flex;
  align-items: center;

  &__video {
    max-height: 100%;

    :deep(iframe) {
      vertical-align: top;
      max-width: 100%;
      max-height: calc((100vw - 30px) * 0.5625);
    }

    &:focus {
      outline: none;
    }
  }

  &__preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    :deep(img) {
      object-fit: cover;
      object-position: top center;
      width: 100%;
      height: 100%;
    }
  }

  &__play {
    background-color: transparent;
    border: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: #fff;
    transition: $transition;

    &:focus {
      box-shadow: none;
      outline: none;
    }

    &:hover {
      color: $primary;
    }
  }

  @media (max-width: 767px) {
    position: relative;
    right: 0;
    left: 0;
    margin-bottom: 32px;
    height: 56.25vw;
    margin-top: 0;

    &__preview {
      :deep(img) {
        object-position: center;
      }
    }

    &__video {
      :deep(iframe) {
        max-height: calc(100vh - 80px);
        height: calc((100vw - 30px) * 0.5625);
      }
    }

    &__play {
      :deep(svg) {
        width: calc(70 / 320 * 100vw);
        height: calc(70 / 320 * 100vw);
      }
    }
  }
}
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, 0.6);
  z-index: 100;
  padding: 30px;
  transition: $transition;

  &:not(.show) {
    pointer-events: none;
    opacity: 0;
  }

  &__video {
    position: relative;
    max-height: 100%;
  }

  &__close {
    position: absolute;
    right: -8px;
    top: -48px;
    color: #fff;
    padding: 0;
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    font-size: 0;

    &:focus {
      outline: none;
    }

    &:after,
    &:before {
      position: absolute;
      content: '';
      height: 2px;
      width: 30px;
      background-color: currentColor;
      top: calc(50% - 1px);
      left: calc(50% - 15px);
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;

    &__video {
      display: flex;
    }

    &__close {
      top: -40px;
    }
  }
}
</style>
