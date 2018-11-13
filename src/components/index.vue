<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index {
    font-size: 1.1rem;
    .banner {
      height: 20rem;
      background-size: contain;
      position: relative;
      padding: 1rem;
      .hello {
      }
      .flower-num {
        position: absolute;
        top: 1rem;
        right: 1rem;
        .iconfont {
          font-size: 2rem;
        }
        .number {
          display: inline-block;
          position: relative;
          color: #b33842;
        }
      }
      .bg-hua {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .main-hua {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -100px;
      }

    }
  }

</style>

<template>
  <div class="index">
    <div class="banner">
      <div class="hello mt5">
        <p> 您好，张小二！</p>
        <p class="mt5">您已经连续打卡25天</p>
      </div>

      <div class="flower-num">
        <span class="iconfont icon-flower"></span>
        <span class="number">20</span>
        <span class="iconfont icon-lottery"></span>
        <span class="number">5</span>
      </div>
      <img class="main-hua" src="../../static/img/s-2.png">
      <img class="bg-hua" src="../../static/img/huayuan.png">
    </div>
    <div class="c">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

