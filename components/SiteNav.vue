<template>
  <nav class="site-nav">
    <nuxt-link :to="{ name: 'index' }" class="site-nav__link h3">
      Shop
    </nuxt-link>
    <nuxt-link :to="{ name: 'cart' }" class="site-nav__link h3">
      Cart
    </nuxt-link>
  </nav>
</template>

<style>
.site-nav {
  display: flex;
  justify-content: center;
  margin-top: calc(1.618 * 2em);
}

.site-nav__link {
  margin-left: 1.618em;
  margin-right: 1.618em;
  display: block;
}
</style>
