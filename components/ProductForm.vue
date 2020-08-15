<template>
  <form class="product-form" @submit.prevent="onSubmit">
    <div
      v-if="!hasOnlyDefaultVariant"
      class="product-form__field"
    >
      <label class="product-form__label" for="id">Style</label>
      <select
        id="id"
        v-model="selectedVariantId"
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
    <button type="submit" class="product-form__submit">
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

<style>
.product-form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.product-form__field {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: calc(var(--gutter) / 2);
}

.product-form__submit {
  width: 100%;
}

.product-form__label {
  text-align: left;
  margin-bottom: 0.5em;
}

@media (min-width: 576px) {
  .product-form {
    max-width: calc(100% / var(--phi));
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--gutter);
  }
}
</style>
