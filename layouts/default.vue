<template>
  <div id="layout-container">
    다시 frommaster 변경
    frommaster 변경함 다시 변경
=======
    frommaster 변경함 nav에서 충돌만듦
>>>>>>> a58c8a5b12470d13f900c729717ae41f13b1f896
    <Nav></Nav>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Nav from "../components/Nav/Nav";

export default {
  components: {
    Nav
  }
}
</script>

<style>
  #__layout{
    width: calc(100% - 260px)!important;
    height:100%!important;
  }
  #layout-container{
  }
  html,body,#__nuxt {
    width: 1280px!important;
    height:960px!important;
    overflow: auto!important;
  }
  .layout-index {
    position: absolute;
    top: 0px;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>

