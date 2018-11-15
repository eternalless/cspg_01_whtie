<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "~@/assets/style/variable";

  .index {
    font-size: 1.1rem;
    .banner {
      height: 20rem;
      background-size: contain;
      position: relative;
      padding: 1rem;
      .hello {
        margin-top: 5rem;
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
          color: #e47e39;
          left: -5px;
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
    .expression {
      display: block;
      margin: 3rem auto;
      width: 13rem;
      overflow: visible;
      white-space: nowrap;
      .iconfont {
        font-size: 3rem;
      }
      .icon-unhappy {
        color: @fontColor2;
      }
      .icon-happy {
        color: @orange;
      }
      .icon-very-happy {
        color: #dd0000;
      }
      .btn {
        padding: 15px 10px;
        width: 8rem;
        margin: 25px auto;
        text-align: center;
        background-color: #2188b6;
        border-radius: 5px;
      }

    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      .contact {
        height: 10rem;
        width: 10rem;
        background: url("../assets/img/contact.png") no-repeat;
        background-size: contain;
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
        <span class="iconfont icon-lottery ml10"></span>
        <span class="number">5</span>
      </div>
      <img class="main-hua" src="../../static/img/s-2.png">
      <img class="bg-hua" src="../../static/img/huayuan.png">
    </div>
    <div class="expression">
      <span class="iconfont icon-unhappy" style="margin-left: -1rem;"></span>
      <span class="iconfont icon-happy" style="margin-left: 2.6rem;"></span>
      <span class="iconfont icon-very-happy" style="margin-left: 2.6rem;"></span>
      <div class="btn mt20">打卡签到</div>
    </div>
    <div class="footer">
      <div class="contact fl">

      </div>
      <div class="fl" style="margin-top: 4rem;">点我预约咨询</div>
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

