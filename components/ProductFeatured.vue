<template>
  <div class="relative pb-full bg-gray-100 overflow-hidden">
    <img
      :src="featuredImageSrc"
      :alt="featuredImageAltText"
      loading="lazy"
      class="absolute w-full h-full object-contain"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('product', [
      'featuredImageSrc',
      'featuredImage',
      'title'
    ]),
    featuredImageAltText () {
      return this.featuredImage.altText || this.title
    }
  }
}
</script>
