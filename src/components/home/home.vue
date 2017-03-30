<template>
  <div class="temp">
    <div class="home-main">
      <section class="movie-hot">
        <header>
          <h2>影院热映</h2>
          <a>更多</a>
        </header>
        <div class="section-content">
          <ul class="items">
            <li v-for="item in movies_in_theaters" class="item">
              <a>
                <div class="item-image" :style="'background-image: url(' + item.images.medium + ')'"></div>
                <p class="item-title">{{ item.title }}</p>
                <div class="item-rating">
                  {{ item.rating.average > 0 ? "评分: " + item.rating.average : "暂无评分" }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="movie-hot">
        <header>
          <h2>即将上映</h2>
          <a>更多</a>
        </header>
        <div class="section-content">
          <ul class="items">
            <li v-for="item in movies_coming_soon" class="item">
              <a>
                <div class="item-image" :style="'background-image: url(' + item.images.medium + ')'"></div>
                <p class="item-title">{{ item.title }}</p>
                <div class="item-rating">
                  {{ item.rating.average > 0 ? "评分: " + item.rating.average : "暂无评分" }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="movie-hot">
        <header>
          <h2>电影Top250</h2>
          <a>更多</a>
        </header>
        <div class="section-content">
          <ul class="items">
            <li v-for="item in movies_top250" class="item">
              <a>
                <div class="item-image" :style="'background-image: url(' + item.images.medium + ')'"></div>
                <p class="item-title">{{ item.title }}</p>
                <div class="item-rating">
                  {{ item.rating.average > 0 ? "评分: " + item.rating.average : "暂无评分" }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home-main {
    max-width: 670px;
    margin: 0 auto;
    .movie-hot {
      padding-top: 10px;
      // height: 200px;
      header {
        height: 30px;
        line-height: 30px;
        padding: 0 18px;
        h2 {
          font-weight: normal;
          float: left;
        }
        a {
          font-size: 16px;
          color: #42bd56;
          float: right;
        }
      }
      .section-content {
        .items {
          height: 210px;
          padding: 10px 18px;
          padding-right: 8px;
          white-space: nowrap;
          overflow-x: auto;
          .item {
            display: inline-block;
            width: 100px;
            margin-right: 10px;
            text-align: center;
            .item-image {
              background-repeat: round;
              height: 140px;
              width: 100px;
            }
            .item-title {
              width: 90%;
              color: #000;
              margin: 5px auto;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .item-rating {
              color: #aaa;
              height: 15px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        movies_in_theaters: [],
        movies_coming_soon: [],
        movies_top250: []
      }
    },
    created () {
      console.log('home')
      this.getMovies_in_theaters()
      this.getMovies_coming_soon()
      this.getMovies_top250()
    },
    methods: {
      // 获取正在热映的电影数据
      getMovies_in_theaters () {
        const url = 'api/movie/in_theaters?count=8'
        this.$http.get(url)
          .then(res => {
            console.log(res.data)
            this.movies_in_theaters = res.data.subjects
          })
          .catch(err => {
            console.log(err)
          })
      },
      getMovies_coming_soon () {
        const url = 'api/movie/coming_soon?count=8'
        this.$http.get(url)
          .then(res => {
            console.log(res.data)
            this.movies_coming_soon = res.data.subjects
          })
          .catch(err => {
            console.log(err)
          })
      },
      getMovies_top250 () {
        const url = 'api/movie/top250?count=8'
        this.$http.get(url)
          .then(res => {
            console.log(res.data)
            this.movies_top250 = res.data.subjects
          })
          .catch(err => {
            console.log(err)
          })
      },
    }
  }
</script>