<template>
  <div class="db-header">
    <header class="db-header-nav" v-show="isShow">
      <div class="db-nav">
        <router-link to="/home">
          <h2>豆瓣</h2>
        </router-link>
        <nav>
          <ul>
            <li><router-link to="/movies" style="color: #2384E8;">电影</router-link></li>
            <li><router-link to="/books" style="color: #9F7860;">图书</router-link></li>
            <li><a href="#" style="color: #E4A813;">广播</a></li>
            <li><a href="#" style="color: #2AB8CC;">小组</a></li>
          </ul>
        </nav>
      </div>

    </header>

    <router-view></router-view>
  </div>

  

</template>

<style lang="scss" scoped>
  .db-header-nav {
    width: 100%;
    height: 47px;
    position: fixed;
    z-index: 1000;
    top: 0;
    .db-nav {
      padding: 0 18px;
      border-bottom: 1px solid #f3f3f3;
      height: 47px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      h2 {
        color: #00b600;
        font-size: 24px;
        line-height: 47px;        
      }
      nav {
        float: right;
        line-height: 47px;
        li {
          display: inline-block;
          font-size: 16px;
          margin: 0 5px;
        }
      }
    }
  }
</style>

<script>

  export default {
    data () {
      return {
        movieList: [],
        isShow: true
      }
    },
    created () {
      console.log(this.$route.path)
      // 刷新页面的时候判断当前路由的路径,如果不是首页就显示顶部导航栏
      if (this.$route.path.toLowerCase() == '/home') {
        this.isShow = true
      } else {
        this.isShow = false
      } 
    },
    methods: {
      
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        // to为下一步跳转到的路由，如果不是首页就显示顶部导航栏
        console.log(to.path)
        if (to.path.toLowerCase() == '/home') {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    }
  }
</script>