<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<script>

</script>

<style>
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: #f4f4f4; */
  font-family: PingFangSC-Regular
}
h1,h2,h3,h4,h5,h6,dl,dd,i,input,span,button,p,img{
  padding: 0;
  margin: 0;
  border: 0;
}
i{
  font-style: normal;
}
input:focus{ outline:none }
</style>
