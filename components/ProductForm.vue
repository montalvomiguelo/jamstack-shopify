<template>
  <form class="" @submit.prevent="onSubmit">
    <div
      v-if="!hasOnlyDefaultVariant"
      class="mb-4"
    >
      <label class="block mb-2 text-left" for="id">Style</label>
      <select
        id="id"
        v-model="selectedVariantId"
        class="block w-full h-10 border-solid border border-black"
        name="id"
      >
        <option
          v-for="variant in variants"
          :key="variant.node.id"
          :value="variant.node.id"
        >
          {{ variant.node.title }}
        </option>
      </select>
    </div>
    <button type="submit" class="w-full px-8 py-4 bg-black text-white">
      Add to cart
    </button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('product', [
      'variants',
      'hasOnlyDefaultVariant'
    ]),
    selectedVariantId: {
      get () {
        return this.$store.state.product.selectedVariantId
      },
      set (value) {
        this.$store.commit('updateSelectedVariantId', value)
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('checkout/addItem', {
        id: this.selectedVariantId,
        quantity: 1
      })
    }
  }
}
</script>
