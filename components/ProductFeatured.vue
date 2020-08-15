<template>
  <div class="product-featured">
    <img
      :src="featuredImageSrc"
      :alt="featuredImageAltText"
      loading="lazy"
      class="product-featured__image"
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

<style>
.product-featured {
  position: relative;
  background-color: #F2F2F2
}

.product-featured:before {
  content: "";
  padding-bottom: 100%;
  display: block;
}

.product-featured__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (min-width: 768px) {
  .product-featured {
    max-width: calc(100% / var(--phi));
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
