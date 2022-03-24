<template>
  <div>
    <app-loader :value="isLoading" />
    <div class="row justify-content-center" v-if="isLoaded">
      <div class="card col-6 mt-5 p-0">
        <div class="card-header">{{ cardInfo.name }}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p v-if="isEmpty" class="card-text">{{ cardInfo.description }}</p>
          <p v-else="" class="card-text">Описание отсутствует...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadMixin from '../mixins/LoadMixin'

  export default {
    name: 'DetailInformationSubBlock',
    mixins: [LoadMixin],
    data() {
      return {
        isEmpty: false,
        cardInfo: {},
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      async load() {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(
            `${this.$apiPath}api/sections/${this.$route.params.code}/subsections/${this.$route.params.subCode}/`,
          )
          if (data.description.length > 0) {
            this.isEmpty = true
          }
          this.cardInfo = data
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },
  }
</script>
