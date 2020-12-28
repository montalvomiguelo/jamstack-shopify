<template>
  <div id="app" class="container mx-auto max-w-5xl px-5 font-sans antialiased">
    <site-header />
    <main class="mb-16">
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
