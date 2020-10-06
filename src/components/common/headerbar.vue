<template>
  <div class="headerbar">
      <!-- 导航 -->
      <!-- TODO: 统一方法，请求完成修改class -->
      <dl class="head-navbar">
          <dd @click="$router.push('/');">首页</dd>
          <dd>购票</dd>
          <dd>正版商城</dd>
          <dd>新闻</dd>
          <dd>视频</dd>
          <dd>直播</dd>
          <dd>发现</dd>
          <dd>社区</dd>
          <dd>会员</dd>
      </dl>
        <!-- logo -->
        <div class="mtime-logo">
            <div class="mtime-logo-image"></div>
        </div>
        <!-- 购物车 -->
        <div class="head-cart">
            <div class="icon-cart"></div>
        </div>
        <!-- 身份验证 -->
        <div class="head-certification">
            <span>登录</span>
            <span></span>
            <span>注册</span>
        </div>
        <!-- App下载 -->
        <i class="line"></i>
        <div class="head-tool">
            <span class="icon-app"></span>
            <span>App下载</span>
            <span></span>
        </div>
        <i class="line"></i>
  </div>
</template>

<script>
export default {
    methods: {

    },
    created() {
    }
}
</script>

<style>
/* 导航栏 */
.headerbar{
    width: calc(100% - 20px - 20px);
    min-width: 1092px;
    padding: 0 20px 0 20px;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: rgba(25, 35, 50, 0.98);;
}
.head-navbar,.mtime-logo,.head-tool,.head-certification,.head-cart{
    display: block;
    float: left;
    font-size: 14px;
}
.head-navbar{
    line-height: 60px;
    color: #c8c8c8;
}
.head-navbar dd{
    float: left;
    margin-right: 30px;
    /* margin-inline-start: 0; */
}
.head-navbar dd:hover{
    color: #fff;
}
/* logo */
.mtime-logo{
    width: calc(100% - 1000px);
    height: 60px;
    position: relative;
}
.mtime-logo-image{
    position: absolute;
    top: calc((60px - 36px) / 2);
    left: calc((100% -1000px - 117px) / 2);
    width: 117px;
    height: 36px;
    background: url(../../assets/head.png) 0 -315px no-repeat;
}
/* App下载 */
.head-tool,.head-certification,.head-cart{
    float: right;
}
.head-tool{
    padding: 0 18px;
    color: #fff;
    line-height: 60px;
}
.line{
    height: 60px;
    float: right;
    border-left: 1px solid #141c28;
    border-right: 1px solid #303947;
    overflow: hidden;
}
.head-tool span{
    float: left;
}
/* 身份验证 */
.head-certification{
    color: #c8c8c8;
    padding: 0 35px;
    line-height: 60px;
}
.head-certification span:hover{
    color: #fff;
}
.head-certification span:nth-child(2){
    margin: 0 23px;
    border-right: 1px solid #303947;
}
/* 购物车 */
.head-cart{
    position: relative;
    background: #e83729;
    height: 62px;
    width: 62px;
}
.icon-cart{
    position: absolute;
    top: calc((100% - 20px) / 2);
    left: calc((100% - 26px) / 2);
    background: url(../../assets/head.png) 0 -45px no-repeat;
    width: 26px;
    height: 20px;
}
</style>