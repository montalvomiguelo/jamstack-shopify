<template>
  <footer class="site-footer">
    <p class="site-footer__title h4">
      Barrel
    </p>
    <a
      href="https://nuxtjs.org/"
      target="_blank"
      class="site-footer__link h5"
    >
      Documentation
    </a>
    <a
      href="https://github.com/nuxt/nuxt.js"
      target="_blank"
      class="site-footer__link h5"
    >
      GitHub
    </a>
  </footer>
</template>

<style>
.site-footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: calc(1.618em * 2);
  padding-bottom: calc(1.618em * 2);
}

.site-footer__link {
  display: block;
  margin-left: 1.618em;
  margin-right: 1.618em;
}

.site-footer__title {
  width: 100%;
  margin-bottom: 1.618em;
  text-align: center;
  text-transform: uppercase;
}
</style>
