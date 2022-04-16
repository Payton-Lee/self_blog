<template>
  <div>
    <main id="home" class="flex flex-col select-none h-100vh w-full justify-between">
      <div class="h-15 w-full"></div>
      <header class="w-full h-15 fixed bg-white/10 z-20">
        <div class="w-4/5 mx-auto flex h-full justify-between items-center">
          <h3 class="w-10 h-10 rounded-lg overflow-hidden" style="font-size: 0;">
            <img class="w-full h-full" src="./../assets/logo.jpg" alt />
            peyton的个人主页
          </h3>
          <nav class="flex justify-between items-center space-x-8">
            <nav-box class v-for="(item, index) in navList" :key="index" :id="item.id" :navName="item.name"
              :navContainer="item.container"></nav-box>
            <nav-box class="iconfont" :class="isDark ? 'icon-moonbyueliang' : 'icon-ai250'" @click="setThemeMode">
            </nav-box>
          </nav>
        </div>
      </header>
      <article class="flex flex-col items-center group">
        <h3 class="text-3xl">Peyton的个人小站</h3>
        <p class="text-slate-200  group-hover:(text-white) duration-150 mt-2" @click.stop="changePoem">/*{{ poem.content }}*/</p>
        <div class="w-90 text-right text-white opacity-0 group-hover:opacity-100 transition duration-400">——     {{ poem.author }}</div>
      </article>
      <footer class="text-center hover:text-white">
        <i class="text-4xl iconfont text-white/30 hover:text-white icon-xiangxia" @click="scrollToNext"></i>
      </footer>
    </main>
    <article id="about"
      class="w-full py-17 flex flex-col overflow-hidden space-y-3 items-center bg-white select-none text-black">
      <section class="text-4xl">关于本站</section>
      <section class="w-30 h-1 bg-green-500 rounded-sm space-y-4"></section>
      <setion class="flex flex-col text-sm items-center space-y-3">
        <p>我是黎培旭，也叫Peyton</p>
        <p>一个前端开发初学者</p>
        <p>想在此留下自己的足迹</p>
        <p>分享自己浅薄的知识</p>
        <p>热爱前端，热爱代码</p>
        <p>期待自己有着不一样的建树</p>
      </setion>
    </article>
    <article id="share"
      class="w-full bg-stone-200 py-17 flex flex-col overflow-hidden items-center text-black select-none">
      <section class="text-4xl">分享</section>
      <section class="w-10 h-1 bg-green-500 rounded-sm mt-5"></section>
      <section class="w-4/5 mt-5 flex flex-wrap justify-center overflow-hidden">
        <share-box v-for="(item, index) in shareList" :key="index" :id="item.id" :shareName="item.name"
          :shareImg="item.imgPath" :shareIntroduce="item.introduce" :shareTips="item.tips" :sharePath="item.path">
        </share-box>
      </section>
    </article>
    <article id="photos"
      class="w-full py-17 bg-white flex flex-col overflow-hidden items-center text-black select-none">
      <section class="text-4xl">图库</section>
      <section class="w-10 h-1 bg-green-500 rounded-sm my-5"></section>
      <section class="w-4/5 flex flex-wrap justify-center overflow-hidden">
        <image-box v-for="(item, index) in imgList" :key="index" :id="item.id" :imgName="item.name"
          :imgIntroduce="item.introduce" :imgPath="item.path"></image-box>
      </section>
    </article>
    <footer class="py-17 px-50 w-full flex flex-row flex-wrap justify-around">
      <footer-link></footer-link>
      <footer-link></footer-link>
      <footer-link></footer-link>
    </footer>
  </div>
</template>

<script>
import NavBox from './widget/Navbox.vue'
import ShareBox from './widget/ShareBox.vue'
import ImageBox from './widget/ImageBox.vue'
import FooterLink from './widget/FooterLink.vue'
import { getPoem } from '../axios.js'
import { easeInOutCubic } from '../utils/animate.js'
import { throttle, debounce } from "lodash/throttle";
export default {
  components: {
    NavBox,
    ShareBox,
    ImageBox,
    FooterLink,
  },
  data() {
    return {
      navList: [
        {
          id: 1,
          name: '首页',
          container: '#home'
        },
        {
          id: 2,
          name: '关于',
          container: '#about'
        },
        {
          id: 3,
          name: '分享',
          container: '#share'
        },
        {
          id: 4,
          name: '图册',
          container: '#photos'
        }
      ],
      imgList: [
        {
          id: 1,
          name: '壁纸',
          introduce: '一些自己收集的电脑壁纸',
          path: 'bizhi'
        },
        {
          id: 2,
          name: '手机壁纸',
          introduce: '一些自己手机的手机壁纸',
          path: 'shoujibizhi'
        },
        {
          id: 3,
          name: '个人',
          introduce: '一些个人的照片存放',
          path: 'selfphoto'
        }
      ],
      shareList: [
        {
          id: 1,
          name: '黑马电商后台管理系统',
          imgPath: 'http://localhost:4000/src/assets/bground.jpg',
          introduce: 'Vue+elementUI+Axios搭建',
          tips: '仅作学习分享',
          path: 'heima'
        }
      ],
      poem: {},
      isDark: false
    }
  },
  created() {
    this.getPoem()
  },
  beforeMount() {
    // 设置title盒子的高

  },
  computed: {
    currentHeight() {
      return document.documentElement.clientHeight || window.innerHeight
    }
  },
  methods: {
    async getPoem() {
      const { data: res } = await getPoem()
      console.log(res)
      this.poem = res
    },
    changePoem() {
      this.getPoem()
    },
    setThemeMode() {
      this.$nextTick(() => {
        let darkmode = localStorage.getItem('theme')
        if (darkmode === 'dark') {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('theme', 'light')
          this.isDark = false
        } else {
          localStorage.setItem('theme', 'dark')
          document.documentElement.classList.add('dark')
          this.isDark = true
        }
      })
    },
    scrollToNext() {
      const beginTime = Date.now()
      const beginValue = document.documentElement.scrollTop
      const rAF = window.requestAnimationFrame
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 1000
        console.log(progress);
        if (progress < 1) {
          document.documentElement.scrollTop = beginValue + Math.ceil(this.currentHeight * easeInOutCubic(progress))
          rAF(frameFunc)
        } else {

          document.documentElement.scrollTop = this.currentHeight
        }
      }
      rAF(frameFunc)
    }
  },
}
</script>

<style lang="less" scoped>
</style>