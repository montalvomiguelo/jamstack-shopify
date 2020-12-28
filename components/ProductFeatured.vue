<template>
  <div class="">
    <img
      :src="featuredImageSrc"
      :alt="featuredImageAltText"
      loading="lazy"
      class=""
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
