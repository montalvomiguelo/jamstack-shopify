<template>
  <div id="app" class="container">
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

img {
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1,
.h1 {
  font-size: 2.369em;
}

h2,
.h2 {
  font-size: 1.777em;
}

h3,
.h3 {
  font-size: 1.333em;
}

h4,
.h4,
h5,
.h5,
h6,
.h6 {
  font-size: 0.75em;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  padding-left: 1.618em;
  padding-right: 1.618em;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
}
</style>
