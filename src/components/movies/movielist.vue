<template>
  <div>
    <mu-appbar title="电影" class="movie-topbar">
      <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
      <mu-icon-button icon='search' slot='right'/>
    </mu-appbar>

    <!-- 左侧抽屉 -->
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-paper class="demo-paper" :zDepth="1">
        <h2>豆瓣电影</h2>
        <p>使用vue搭建的移动端页面</p>
      </mu-paper>
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="电影">
          <mu-icon slot="left" value="movie"></mu-icon>
        </mu-list-item>
        <mu-list-item title="图书">
          <mu-icon slot="left" value="movie"></mu-icon>
        </mu-list-item>
        <mu-list-item title="广播" class="item-radio">
          <mu-icon slot="left" value="movie"></mu-icon>
        </mu-list-item>
        <mu-list-item @click="goAnywhere({path: '/home'})" title="返回首页">
          <mu-icon slot="left" value="home"></mu-icon>
        </mu-list-item>
        <mu-list-item title="关于">
          <mu-icon slot="left" value="info"></mu-icon>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <!-- 中间电影列表部分 -->
    <router-view></router-view>

    <!-- 底部tabbar -->
      <mu-tabs :value="activeTab" shift @change="handleTabChange" class="movie-tabbar">
        <mu-tab @click="goAnywhere({name: 'movieintheaters'})" value="theaters" title="正在热映" icon="ondemand_video"/>
        <mu-tab @click="goAnywhere({name: 'moviecomingsoon'})" value="music" title="即将上映" icon="music_note"/>
        <mu-tab @click="goAnywhere({name: 'movietop'})" value="books" title="top250" icon="trending_up"/>
      </mu-tabs>
  </div>
</template>

<style lang="scss" scoped>
  .movie-topbar {
    background-color: rgb(71, 74, 79);
  }
  .demo-paper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: left;
    width: 100%;
    height: 30%;
    background-color: rgb(71, 74, 79);
    color: #fff;
    padding-left: 18px;
    padding-bottom: 20px;
    h2 {
      font-weight: normal;
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
  .item-radio {
    border-bottom: 1px solid rgba(71, 74, 79, 0.1);
  }

  .movie-tabbar {
    background-color: rgb(71, 74, 79);
    position: fixed;
    bottom: 0;
    height: 53px;
  }

  .mu-tab-link {
    color: #fff;
    padding: 4px 0;
  }

  .mu-tab-active {
    color: deepskyblue;
  }
</style>

<script>
  export default {
    data () {
      return {
        open: false,
        docked: true,
        activeTab: 'theaters'
      }
    },
    created () {
      console.log('movies')
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
        console.log(this.docked)
      },
      goHome () {
        this.$router.push({path: '/home'})
      },
      goAnywhere (path) {
        console.log(path)
        this.$router.push(path)
      },
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>