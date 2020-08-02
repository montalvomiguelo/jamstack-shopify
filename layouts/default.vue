<template>
  <div id="app" class="container">
    <site-header />
    <main class="main">
      <nuxt />
    </main>
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

p {
  margin-bottom: 1em;
}

button,
.button {
  height: calc(1.618 * 2em);
  padding-left: 1.618em;
  padding-right: 1.618em;
  background-color: #000;
  border: none;
  color: #fff;
  font: inherit;
  text-align: center;
  line-height: calc(1.618 * 2em);
  cursor: pointer;
}

.button:hover {
  text-decoration: none;
}

select {
  height: calc(1.618 * 2em);
  padding-left: 1.618em;
  padding-right: 1.618em;
  border-radius: 0;
  border-color: #000;
  font: inherit;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>") no-repeat right 10px center transparent;
  background-size: 15px;
}

label {
  font: inherit;
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

.main {
  margin-bottom: calc(1.618em * 2);
}
</style>
