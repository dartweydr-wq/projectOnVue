export default {
  install(Vue) {
    if (process.env.NODE_ENV === 'production') {
      Vue.prototype.$apiPath = 'https://regulator-legal-acts.shaykin-av.ru/'
    } else {
      const proxy = 'https://cors-anywhere.shaykin-av.ru/'
      Vue.prototype.$apiPath = `${proxy}https://regulator-legal-acts.shaykin-av.ru/`
    }
  },
}
