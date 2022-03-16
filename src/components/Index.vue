<template>
  <div>
    <header class="header flex flex-col select-none h-100vh w-full justify-between">
      <nav class="navBar">
        <h3>
          <img src="../../public/logo.jpg" alt />
          peyton的个人主页
        </h3>
        <div class="menu-select">
          <nav-box
            class="menu-select-box"
            v-for="(item, index) in navList"
            :key="index"
            :id="item.id"
            :navName="item.name"
            :navPath="item.path"
          ></nav-box>
          <nav-box class="menu-select-box iconfont icon-moonbyueliang" @click="setThemeMode"></nav-box>
        </div>
      </nav>
      <article class="article">
        <h3>Peyton的个人小站</h3>
        <p>{{ poem.content }}</p>
      </article>
      <footer class="fotterJump">
        <i class="iconfont icon-xiangxia"></i>
      </footer>
    </header>
  </div>
</template>

<script>
import NavBox from './widget/Navbox.vue'
import axios from 'axios'
export default {
  components: {
    NavBox
  },
  data() {
    return {
      navList: [
        {
          id: 1,
          name: '首页',
          path: '/home'
        },
        {
          id: 2,
          name: '关于',
          path: '/about'
        },
        {
          id: 3,
          name: '作品',
          path: '/opus'
        },
        {
          id: 4,
          name: '图册',
          path: '/photos'
        }
      ],
      poem: {},
      isDark: false
    }
  },
  created() {
    this.getPoem()
    let darkMode = localStorage.getItem("theme")
    if (darkMode === "dark") enableDarkMode()
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => (e.matches ? this.enableDarkMode() : this.disableDarkMode()))
  },
  beforeMount() {
    // 设置title盒子的高度

  },
  methods: {
    async getPoem() {
      const data = await axios.get('https://v1.jinrishici.com/all.json')
      if (data.status === 200) {
        this.poem = data.data
      }
      console.log(this.poem)
    },
    enableDarkMode() {
      this.$store.commit('enableDarkMode')
    },
    disableDarkMode() {
      this.$store.commit('disableDarkMode')
    },
    setThemeMode() {
      let darkmode = localStorage.getItem('theme')
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  // align-items: center;
  .navBar {
    width: 70vw;
    margin: 0 auto;
    height: 3.75rem;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 0px;
      border-radius: 0.625rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menu-select {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      .menu-select-box {
        margin-left: 3vw;
      }
    }
  }
  .article {
    text-align: center;
    h3 {
      font-size: 1.875rem;
    }
  }
  .fotterJump {
    text-align: center;
    i {
      font-size: 2.25rem;
    }
  }
}
</style>