<template>
  <div
    class="overflow-hidden w-75 h-63 rounded-2xl mx-3 mb-6 mt-1 bg-white transform transition duration-400 ease-in-out hover:(-translate-y-0.5 shadow-lg shadow-gray-500/50)"
  >
    <div class="w-full h-39">
      <img :src="shareList.imgPath" class="w-full h-full" alt />
    </div>
    <div class="w-full h-24 p-4">
      <p>{{ shareList.name }}</p>
      <p class="text-xs text-gray-500 mt-1">{{ shareList.introduce }}</p>
      <p class="text-xs text-gray-400 mt-1">{{ shareList.tips }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    shareName: {
      type: String
    },
    shareImg: {
      type: String
    },
    shareIntroduce: {
      type: String
    },
    shareTips: {
      type: String
    },
    sharePath: {
      type: String
    }
  },
  data() {
    return {
      shareList: {
        id: this.id,
        name: this.shareName,
        imgPath: this.shareImg,
        introduce: this.shareIntroduce,
        tips: this.shareTips,
        path: this.sharePath
      }
    }
  }

}
</script>

<style scoped>
</style>