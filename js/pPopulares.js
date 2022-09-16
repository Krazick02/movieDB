const {
    createApp
} = Vue

const myApp = createApp({
    data() {
        return {
            poStreaming: null,
            poTv: null,
            poAlquiler: null,
            poCine: null,
            grPeliculas: null,
            grTv: null,
            tenHoy: null,
            tenSem: null,
            imgRoute: 'https://image.tmdb.org/t/p/w500/'
        }
    },
    methods: {
        detalles(p) {
            localStorage.setItem('pelicula', JSON.stringify(p));
            window.location.href = "pelicula.html";
        },
        getPopularStreaming() {
            fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=038eb1b67a577ce9afaf326a641856f8')
                .then((response) => response.json())
                .then((res) => (this.poStreaming = res.results))
                .catch((error) => console.log('error', error));
        },
        getPopularTv() {
            fetch('https://api.themoviedb.org/3/tv/popular?api_key=038eb1b67a577ce9afaf326a641856f8&language=en-US&page=1')
                .then((response) => response.json())
                .then((res) => (this.poTv = res.results))
                .catch((error) => console.log('error', error));
        },
        getPopularAlguiler() {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=038eb1b67a577ce9afaf326a641856f8&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&release_date.gte=2022-02-15&release_date.lte=2022-07-22&with_watch_monetization_types=rent')
                .then((response) => response.json())
                .then((res) => (this.poAlquiler = res.results))
                .catch((error) => console.log('error', error));
        },
        getPopularCine() {
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=038eb1b67a577ce9afaf326a641856f8&language=en-US&page=1')
                .then((response) => response.json())
                .then((res) => (this.poCine = res.results))
                .catch((error) => console.log('error', error));
        },
        getGratisPel() {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=038eb1b67a577ce9afaf326a641856f8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free')
                .then((response) => response.json())
                .then((res) => (this.grPeliculas = res.results))
                .catch((error) => console.log('error', error));
        },
        getGratisTv() {
            fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=038eb1b67a577ce9afaf326a641856f8&language=en-US&page=1')
                .then((response) => response.json())
                .then((res) => (this.grTv = res.results))
                .catch((error) => console.log('error', error));
        },
        getTenHoy() {
            fetch('https://api.themoviedb.org/3/trending/all/day?api_key=038eb1b67a577ce9afaf326a641856f8')
                .then((response) => response.json())
                .then((res) => (this.tenHoy = res.results))
                .catch((error) => console.log('error', error));
        },
        getTenSem() {
            fetch('https://api.themoviedb.org/3/trending/all/week?api_key=038eb1b67a577ce9afaf326a641856f8')
                .then((response) => response.json())
                .then((res) => (this.tenSem = res.results))
                .catch((error) => console.log('error', error));
        }
    },
    mounted() {
        this.getPopularCine()
        this.getPopularTv()
        this.getPopularAlguiler()
        this.getPopularStreaming()
        this.getGratisPel()
        this.getGratisTv()
        this.getTenSem()
        this.getTenHoy()
    }
}).mount('#verPelis')