<template>
  <div>Раздел еще не активен...</div>
</template>

<script>
  //import LoadMixin from '../mixins/LoadMixin'

  export default {
    name: 'Npa',
    /*mixins: [LoadMixin],
    data() {
      return {
        items: null,
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      async load() {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(`${this.$apiPath}api/regulatory-legal-acts/`)
          this.items = data
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },*/
  }
</script>
