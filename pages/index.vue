<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        test-vuex
      </h1>
      <h2 class="subtitle">
        My riveting Nuxt.js project
      </h2>
      <h3>
        Store value is {{ $store.state.options.val }}
      </h3>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  fetch ({store}) {
    store.commit('options/PLUS', null, {root: true})
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
