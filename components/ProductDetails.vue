<template>
  <div class="">
    <h1 class="">
      {{ title }}
    </h1>
    <p class="">
      {{ selectedVariantPrice }}
    </p>
    <product-form />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="" v-html="descriptionHtml" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductForm from '~/components/ProductForm.vue'

export default {
  components: {
    ProductForm
  },
  computed: mapGetters('product', [
    'title',
    'descriptionHtml',
    'selectedVariant',
    'selectedVariantPrice'
  ])
}
</script>
