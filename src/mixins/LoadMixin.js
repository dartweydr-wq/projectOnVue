import AppLoader from '../components/AppLoader'

export default {
    components: {AppLoader},
    data() {
        return {
            isLoaded: true,
            isLoading: false
        }
    },
    methods: {
        beforeLoad() {
            this.isLoaded = false
            this.isLoading = true
        },
        loaded() {
            this.isLoaded = true
            this.isLoading = false
        }
    }
}