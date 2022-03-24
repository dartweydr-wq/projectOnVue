<template>
  <div>
    <app-loader :value="isLoading" />
    <div class="row justify-content-center">
      <div v-if="isLoaded" class="card col-6 mt-5 p-0">
        <div class="card-header">{{ cardInfo.name }}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{{ cardInfo.description }}</p>
          <p class="text-muted">
            <small>Для получения дополнительных блоков, относящиеся к этому коду раздела, нажмите кнопку</small>
          </p>
          <button @click="getBlockSections" class="btn btn-outline-primary">Получить</button>
          <div v-if="isEmpty" class="alert alert-danger w-50 mt-1" role="alert">Нету информаци...</div>
        </div>
      </div>
    </div>

    <div class="d-flex mt-3" v-if="isLoaded">
      <div class="row">
        <div class="col-6 p-2" v-for="(item, index) in cardSectionsInfo" :key="index">
          <div class="card" style="min-height: 100%">
            <div class="card-header">
              <router-link :to="{name: 'DetailInformationSubBlock', params: {subCode: item.code}}">
                {{ item.code }}
              </router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadMixin from '../mixins/LoadMixin'

  export default {
    name: 'DetailBlock',
    mixins: [LoadMixin],
    data() {
      return {
        isEmpty: false,
        cardInfo: {},
        cardSectionsInfo: {},
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      async load() {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(`${this.$apiPath}api/sections/${this.$route.params.code}/`)
          this.cardInfo = data
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
      async getBlockSections() {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(`${this.$apiPath}api/sections/${this.$route.params.code}/subsections/`)
          this.cardSectionsInfo = data
          if (data.length === 0) {
            this.isEmpty = true
          }
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },
  }
</script>
