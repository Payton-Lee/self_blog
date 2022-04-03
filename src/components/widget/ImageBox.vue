<template>
  <div
    class="group w-90 h-50 overflow-hidden rounded-2xl mx-3 mb-6 mt-1 bg-white transform transition duration-400 ease-in-out hover:(-translate-y-0.5 shadow-lg shadow-gray-500/50) relative"
  >
    <img src="../../assets/bground.jpg" class="w-full h-full" alt />
    <div class="text-white absolute z-10 top-6 left-6 space-y-1">
      <p class="text-2xl">{{ imgList.name }}</p>
      <div class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-400 space-y-1">
        <div class="w-40 h-1 bg-white rounded-sm"></div>
        <p class>{{ imgList.introduce }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    imgName: {
      type: String
    },
    imgIntroduce: {
      type: String
    },
    imgPath: {
      type: String
    }
  },
  data() {
    return {
      imgList: {
        id: this.id,
        name: this.imgName,
        introduce: this.imgIntroduce,
        path: this.imgPath
      }
    }
  }
}
</script>

<style>
</style>