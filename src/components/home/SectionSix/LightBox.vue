<template>
  <transition 
    mode="out-in" 
    name="fade"
  >
    <LightBox 
      :images="images" 
      ref="lightbox"
      :startAt="0"
      :showCaption="true"
      :showLightBox="false"
      @onOpened="handleOnOpen"
    />
  </transition>
</template>

<script>
import LightBox from 'vue-image-lightbox';
require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

export default {
  props: ['images', 'show'],
  components: {
    LightBox
  },
  watch: {
    show (val) {
      if (val) {
        this.$refs.lightbox.showImage(0);
      }
    }
  },
  methods: {
    handleOnOpen(val) {
      if (!val) {
        this.$emit('close');
      }
    }
  }
}
</script>

<style lang="sass">
.vue-lb-header
  margin-bottom: 20px;
</style>
