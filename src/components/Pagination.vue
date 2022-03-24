<template>
  <div class="btn-toolbar">
    <div class="btn-group">
      <button
        class="btn btn-outline-primary m-1"
        :class="{active: currentPage === page}"
        v-for="page in totalPages"
        :key="page"
        @click="changePages(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: ['total'],
    data() {
      return {
        currentPage: 1,
      }
    },
    computed: {
      totalPages() {
        return this.total.total_page
      },
    },
    methods: {
      changePages(pageNum) {
        this.currentPage = pageNum
        this.$emit('page-chenged', pageNum)
      },
    },
  }
</script>
<style>
  .active {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
</style>
