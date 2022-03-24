<template>
  <div class="container-lg">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'Container',
    components: {
      Header,
    },
  }
</script>
