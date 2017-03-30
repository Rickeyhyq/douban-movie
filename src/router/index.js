import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import movies from '../components/movies/movielist.vue'
import books from '../components/books/booklist.vue'
import movieintheaters from '../components/movies/movie_in_theaters.vue'
import moviecomingsoon from '../components/movies/movie_coming_soon.vue'
import movietop from '../components/movies/movie_top.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: 'home' },
    { name: 'home', path: '/home', component: home },
    { name: 'movies', path: '/movies', component: movies,
      children: [
        { path: '', component: movieintheaters },
        { name: 'movieintheaters', path: 'in_theaters', component: movieintheaters },
        { name: 'moviecomingsoon', path: 'coming_soon', component: moviecomingsoon },
        { name: 'movietop', path: 'top250', component: movietop }
      ]
    },
    { name: 'books', path: '/books', component: books }
  ]
})
