export default {
  install(Vue) {
    Vue.prototype.$logError = (error) => {
      console.error(error)
    }
  },
}
