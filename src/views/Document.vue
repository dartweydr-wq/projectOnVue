<template>
  <div>
    <app-loader :value="isLoading" />
    <table v-if="isLoaded" class="table mt-5">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Имя</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index }}</td>
          <td>{{ item.name }}</td>
          <td>
            <router-link :to="{name: 'DocumentDetail', params: {id: item.id}}">{{ item.id }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :total="total" @page-chenged="load" />
  </div>
</template>

<script>
  import LoadMixin from '../mixins/LoadMixin'
  import Pagination from '../components/Pagination'
  export default {
    name: 'Document',
    components: {
      Pagination,
    },
    mixins: [LoadMixin],
    data() {
      return {
        items: null,
        pages: '',
        page: 1,
        total: 0,
      }
    },
    mounted() {
      this.load(this.page)
    },
    methods: {
      async load(pageNumber) {
        this.beforeLoad()
        try {
          const {data} = await this.$axios.get(`${this.$apiPath}api/document-types/?page=${pageNumber}`)
          this.items = data.data
          this.total = data.paginator
          this.loaded()
        } catch (error) {
          this.$logError(error)
        }
      },
    },
  }
</script>
