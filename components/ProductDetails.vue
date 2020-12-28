<template>
  <div class="mt-6 text-center">
    <h1 class="mb-4 text-4xl">
      {{ title }}
    </h1>
    <p class="mb-6">
      {{ selectedVariantPrice }}
    </p>
    <product-form />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="leading-6 mt-10" v-html="descriptionHtml" />
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
