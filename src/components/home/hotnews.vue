<template>
  <div class="hotnews">
      <img :src="hotnews.img" alt="">
      <h3>{{hotnews.title}}</h3>
      <p>{{hotnews.summary}}</p>
  </div>
</template>

<script>
export default {
    props: ['hotnews']
}
</script>

<style>
.hotnews{
    float: left;
    display: block;
    width: auto;
    height: auto;
    margin-right: 20px;
    margin-bottom: 20px;
}
.hotnews h3{
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}
.hotnews p{
    font-size: 14px;
    color: #888;
    margin-top: 3px;
}
</style>