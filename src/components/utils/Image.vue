<template>
  <picture class="picture" v-lazyload>
    <img
      :alt="alt"
      :data-src="src"
      :data-srcset="getSrcset"
      :data-srcset-m="getSrcsetM"
    />
  </picture>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: [String, null]
    },
    noMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSrc2x() {
      return this.src.split('.').join('@2x.');
    },
    getSrcset() {
      return `${this.src} 1x, ${this.getSrc2x} 2x`;
    },
    getSrcM() {
      return this.src.split('.').join('-m.');
    },
    getSrcM2x() {
      return this.getSrcM.split('.').join('@2x.');
    },
    getSrcsetM() {
      return this.noMobile ? '' : `${this.getSrcM} 1x, ${this.getSrcM2x} 2x`;
    }
  }
};
</script>

<style lang="scss" scoped>
.picture {
  display: block;

  img {
    max-width: 100%;
    width: 100%;
  }
}
</style>
