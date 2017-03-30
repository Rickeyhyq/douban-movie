import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import movies from '../components/movies/movielist.vue'
import books from '../components/books/booklist.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: 'home' },
    { name: 'home', path: '/home', component: home },
    { name: 'movies', path: '/movies', component: movies },
    { name: 'books', path: '/books', component: books }
  ]
})
