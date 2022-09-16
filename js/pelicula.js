const {
    createApp
} = Vue

const myApp = createApp({
    data() {
        return {
            pelicula: null,
            imgRoute: 'https://image.tmdb.org/t/p/w500/',
            poster_path: '',
            id: '',
            original_language: '',
            overview: '',
            popularity: '',
            release_date: '',
            title: '',
            vote_average: '',
            vote_count: ''

        }
    },
    methods: {
        ver() {
            console.log(this.pelicula.title)
        },
        back() {
            window.location.href = 'home.html';
        }
    },
    mounted() {
        let p = localStorage.getItem('pelicula')
        let peli = JSON.parse(p)
        this.poster_path = peli.poster_path
        this.id = peli.id,
            this.original_language = peli.original_language,
            this.overview = peli.overview,
            this.popularity = peli.popularity
        this.release_date = peli.release_date
        this.title = peli.title
        this.vote_average = peli.vote_average
        this.vote_count = peli.vote_count
    }
}).mount('#verPelis')