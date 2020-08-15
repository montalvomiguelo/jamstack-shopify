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
  height: calc(var(--phi) * 2em);
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  background-color: #000;
  border: none;
  color: #fff;
  font: inherit;
  text-align: center;
  line-height: calc(var(--phi) * 2em);
  cursor: pointer;
}

.button:hover {
  text-decoration: none;
}

select {
  height: calc(var(--phi) * 2em);
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  border-radius: 0;
  border-color: #000;
  font: inherit;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cpath d='M0 0s3.4 4.4 3.5 4.4C3.7 4.4 7.1 0 7.1 0H0z'/%3E%3C/svg%3E") no-repeat right 16px center transparent;
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
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
}

.main {
  margin-bottom: calc(var(--gutter) * 2);
}
</style>
