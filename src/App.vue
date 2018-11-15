<style lang="less">
  @import "~@/assets/style/global";
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getToken () {
      this.$http.get('/wx/token', (rs) => {
        console.log(rs)
      })
    }
  },
  mounted () {
    this.getToken()
    wx.config({
      debug: true, // 开启调试模式。
      appId: 'wx3a21e896395513f0', // 必填，公众号的唯一标识
      timestamp: +new Date(), // 必填，生成签名的时间戳
      nonceStr: 'cspg_11000', // 必填，生成签名的随机串
      signature: 'cspg_32112',// 必填，签名
      jsApiList: [] // 必填，需要使用的JS接口列表
    })
  }
}
</script>
