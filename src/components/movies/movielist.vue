<template>
  <div>
    <mu-appbar title="电影">
      <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
      <mu-icon-button icon='search' slot='right'/>
    </mu-appbar>

    <!-- 左侧抽屉 -->
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item @click="goHome" title="返回首页"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
  export default {
    data () {
      return {
        open: false,
        docked: true
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
      }
    }
  }
</script>