<template>
  <div class="row justify-content-center">
    <app-loader :value="isLoading" />
    <div class="card col-6 mt-5 p-0" v-if="isLoaded">
      <div class="card-header">ID : {{ items.id }}</div>
      <div class="card-body">
        <p class="card-text">{{ items.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadMixin from '../mixins/LoadMixin'

  export default {
    name: 'DocumentDetail',
    mixins: [LoadMixin],
    data() {
      return {
        items: {},
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      async load() {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(`${this.$apiPath}api/document-types/${this.$route.params.id}/`)
          this.items = data
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },
  }
</script>
