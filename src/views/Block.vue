<template>
  <div class="mt-5">
    <app-loader :value="isLoading" />
    <table v-if="isLoaded" class="table">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Код</th>
          <th scope="col">Имя</th>
          <th scope="col">Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index }}</td>
          <td>
            <router-link :to="{name: 'DetailBlock', params: {code: item.code}}">{{ item.code }}</router-link>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import LoadMixin from '../mixins/LoadMixin'
  export default {
    name: 'Block',
    mixins: [LoadMixin],
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
          const {data} = await this.$axios.get(`${this.$apiPath}api/sections/`)
          this.items = data
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
