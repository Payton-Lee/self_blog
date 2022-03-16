<template>
  <div class="box">
    {{ navList.name }} 
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    navName: {
      type: String
    },
    navPath: {
      type: String
    }
  },
  data() {
    return {
      navList: {
        id: this.id,
        name: this.navName,
        path: this.navPath
      }
    }
  },
  created() {
    console.log(this.navList);
  }
}
</script>

<style lang="less" scoped>
.box {
  @apply flex flex-col content-center w-17 h-10 text-center relative leading-10 select-none rounded-md transition hover:(bg-white bg-opacity-35) hover:after:(content-[''] w-8 absolute h-1 bg-gray-50 bottom-1 rounded-sm inset-x-0 mx-auto);
}
</style>