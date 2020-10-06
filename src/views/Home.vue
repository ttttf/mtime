<template>
  <div>
    <header-bar></header-bar>
    <!-- 搜索框 -->
    <div class="search-bar">
      <div class="search">
        <!-- 相对定位 -->
        <div class="button-type">
          <span>全部</span>
          <i></i>
          <span>|</span>
        </div>
        <!-- float -->
        <div class="search-input">
          <input type="text" name="" id="" placeholder="搜索电影、影院、影人、商品、新闻">
        </div>
        <!-- float -->
        <div class="icon-search-highlight">
          <i class="icon-search"></i>
        </div>
      </div>
    </div>
    <!-- 幻灯片 -->
    <!-- TODO: 请求后台图片数据 -->
    <!-- TODO: 点击图片跳转链接 -->
    <div class="slideshow-home">
      <slide-show 
        :ImgUrl="item" 
        v-for="(item,index) in slideshowimages" 
        :key="index" 
        class="slideshow-flash" 
        :class="{show:!(index - param)}" 
      >
      </slide-show>
      <button class="btn-pre" @click="pre">
        <div></div>
      </button>
      <button class="btn-next" @click="next">
        <div></div>
      </button>
    </div>
    <!-- TODO: 数据驱动点状图 -->
    <div class="sliderdot">
      <div class="sliderdot-position"> 
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

    </div>
    <!-- 广告位招租 -->
    <div></div>
    <!-- 今日热点 -->
    <div class="todayhot">
      <div class="todayhot-left">
        <div class="todayhot-navbar">
          <h2>今日热点</h2>
          <div class="todayhot-navbar-menu">
            <span>全球拾趣</span>
            <i>|</i>
            <span>时光对话</span>
            <i>|</i>
            <span>产业聚焦</span>
            <i>|</i>
            <span>电视情报</span>
          </div>
          <span class="morenews">更多 &gt;</span>
        </div>
        <!-- news -->
        <div class="cover">
          <hot-news v-for="(item,index) in hotnews" :key="index" :hotnews="item" style="width:;"></hot-news>
        </div>
      </div>
      <div class="todayrecmd-right">
        <h2>今日推荐</h2>
        <div class="todayrecmd">
            <div class="">
              <img :src="recmd.img1" alt="" class="todayrecmd-img1">
              <img :src="recmd.img2" alt="" class="todayrecmd-img2">
              <div class="recmdcontent">
                <a href="#">{{recmd.title}}</a>
                <p class="recmdshow">{{recmd.mshow}}</p>
                <p>
                  <i></i>
                  {{recmd.mainrecmd}}
                </p>
                <p>{{recmd.recmder}}</p>
              </div>
              
            </div>
        </div>
      </div>
    </div>
    <!-- 分隔线 -->
    <span></span>
  </div>
</template>

<script>
import HeaderBar from '../components/common/headerbar'
import SlideShow from '../components/common/slideshow'
import HotNews from '../components/home/hotnews.vue';

export default {
  // TODO: 将slideshowimages ,hotnews请求后台数据
  // TODO:请求本地数据时，需要加require
  data() {
    return {
      slideshowimages: [
        {img:require('../assets/home/home-01.jpg')},
        {img:require('../assets/home/home-02.jpg')},
        {img:require("../assets/home/home-03.jpg")},
        {img:require("../assets/home/home-04.jpg")},
        {img:require("../assets/home/home-05.jpg")},
      ],
      hotnews: [
        {img:require('../assets/hotnews/hotnews-01.jpg'),title:'帕丁森版《蝙蝠侠》推迟到2022年上映',summary:'《黑客帝国4》明年圣诞见 DC多部大片调档'},
        {img:require('../assets/hotnews/hotnews-02.jpg'),title:'范冰冰劳模姐等主演"355"发角色海报',summary:'5位女特工群戏 "黑凤凰"西蒙金伯格执导'},
        {img:require('../assets/hotnews/hotnews-03.jpg'),title:'撤档！科幻片《沙丘》推迟到明年10月',summary:'北美电影院面临残酷局面 今年秋冬无大片'},
        {img:require('../assets/hotnews/hotnews-04.jpg'),title:'“小贱贱”《分身人》再曝中字预告',summary:'游戏小人物要翻身做主人 12月11日北美上映'},
        {img:require('../assets/hotnews/hotnews-05.jpg'),title:'"王冠"第四季发布戴安娜王妃婚纱照!',summary:'第四季11月上线Netflix 查尔斯戴安娜大婚'},
        {img:require('../assets/hotnews/hotnews-06.jpg'),title:'《权力的游戏》前传"龙之堡"确定男主',summary:'帕迪·康斯戴恩扮演韦赛里斯塔格利安国王'},
      ],
      recmd:{
        img1:require('../assets/recmd/recmd-01.jpg'),
        img2:require('../assets/recmd/recmd-02.jpg'),
        title:'新警察故事',
        mshow:'我做的事情我负责！',
        mainrecmd:'怀念逝去的陈木胜时代 ',
        recmder:'——&nbsp;&nbsp;时光鉴片室'},
      param: 0,
    }
  },
  components: {
    HeaderBar,
    SlideShow,
    HotNews
  },
  methods: {
    // 请求图片数据(异步请求)
    requestslideshowimg() {
      
    },
    // 上一张图片
    pre() {
      if(this.param <= 0){
        this.param = this.param + this.slideshowimages.length
      }
      this.param -= 1
    },
    // 下一张图片
    next() {
      if(this.param >= this.slideshowimages.length - 1){
        this.param = this.param - this.slideshowimages.length
      }
      this.param += 1
    },
    // 请求 hotnews 数据
    requesthotnews() {

    }
  },
  created() {
    this.requestslideshowimg()
    this.requesthotnews()
  }
}
</script>

<style>
/* 搜索框 */
.search-bar{
  width: 1200px;
  height: 65px;
  text-align: center;
  padding-top: 25px;
  margin: 0 auto;
  margin-top: 60px;
}
.search{
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 19px;
  height: 38px;
  width: 500px;
  position: relative;
  line-height: 38px;
}
.button-type{
  width: 100px;
  height: 38px;
  line-height: 38px;
  position: absolute;
  left: 0;
  top: 0;
}
.button-type span:nth-child(1){
  height: 28px;
  padding: 5px 7px;
  line-height: 28px;
  margin-left: 15px;
}
.button-type i{
  background: url(../assets/head.png) -152px 0 no-repeat;
  width: 11px;
  height: 7px;
  display: inline-block;
}
.button-type span:nth-child(3){
  margin: 0 10px;
}
.search span{
  color: #999999;
}
.search-input,.icon-search-highlight{
  float: left;
}
.search-input{
  padding: 0 0 0 100px;
  width: 320px;
  height: 38px;
}
.search-input input{
  border: 0;
  height: 24px;
  width: 320px;
}
.icon-search-highlight{
  margin: 4px 10px;
  width: 54px;
  height: 32px;
  line-height: 38px;
}
.icon-search-highlight:hover{
  border-radius: 20px;
  background: rgb(25, 132, 233);
  /* color: #fff; */
}
/* TODO:,鼠标悬停时将会改变搜索图标外观 */
.icon-search{
  background: url(../assets/head.png) -115px -45px no-repeat;
  width: 19px;
  height: 19px;
  display: inline-block;
}
/* 幻灯片 */
.slideshow-home{
  width: 1200px;
  height: 360px;
  margin: 0 auto;
  position: relative;
}
.slideshow-flash{
  position: absolute;
  top: 0;
  left: 0;
}
.show{
  z-index: 3;
  opacity: 1;
}
.btn-pre,.btn-next{
  width: 48px;
  height: 102px;
  position: absolute;
  opacity: 0.4;
  background-color: #000;
  z-index: 5;
  top: calc((100% - 102px)/2);
}
.btn-pre{
  left: 0;
}
.btn-next{
  right: 0;
}
.btn-pre div,.btn-next div{
  position: absolute;
  top: calc((100% - 47px)/2);
  left: calc((100% - 21px)/2);
  width: 21px;
  height: 47px;
  opacity: 0.6;
}
.btn-pre div{
  background: url(../assets/index24.png) no-repeat;
}
.btn-next div{
  background: url(../assets/index24.png) -21px 0 no-repeat;
}
.sliderdot{
  width: 1200px;
  height: 21px;
  margin: 0 auto;
  /* background: #999999; */
}
.sliderdot-position{
  width: 100px;
  height: 21px;
  margin: 0 auto;
}
.sliderdot-position i{
  display: inline-block;
  background: #cbcbcb;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  margin: 0 5px;
}
/* 今日热点 */
.todayhot{
  width: 1200px;
  height: 567px;
  margin: 38px auto 0;
}
.todayhot-left{
  float: left;
}
.todayrecmd-right{
  float: right;
}
.todayhot-left{
  width: 895px;
  height: 490px;
}
.todayhot-navbar{
  width: 100%;
  height: 24px;
}
.todayhot-navbar h2{
  font-size: 24px;
  font-weight: 400;
  color: #6e6e6e;
  float: left;
  display: block;
}
.todayhot-navbar-menu{
  float: left;
  display: block;
  width: 384px;
  height: 21px;
  margin-left: 26px;
}
.todayhot-navbar-menu span{
  width: 64px;
  height: 24px;
  color: #333;
}
.todayhot-navbar-menu i{
  color: #bebebe;
  margin: 8px 16px 0;
}
.todayhot-navbar-menu span,.todayhot-navbar-menu i{
  float: left;
  display: block;
  height: 16px;  
  font-size: 16px;
  margin-top: 8px;
}
.morenews{
  display: block;
  float: right;
  font-size: 14px;
  margin-top: 8px;
}
/* cover */
.cover{
  height: 470px;
  width: 915px;
  margin-top: 16px;
}
/* 今日推荐 */
.todayrecmd-right{
  text-align: center;
  width: 290px;
  height: 490px;
}
.todayrecmd-right h2{
  font-size: 24px;
  font-weight: 400;
  color: #6e6e6e;
}
.todayrecmd{
  margin-top: 16px;
  position: relative;
}
.todayrecmd-img1{
  width: 290px;
  height: 240px;
}
.todayrecmd-img2{
  width: 84px;
  height: 126px;
  position: absolute;
  top: 175px;
  right: 15px;
  border: 2px solid #fff;
}
.recmdcontent{
  width: 260px;
  height: 180px;
  padding: 15px;
}
</style>