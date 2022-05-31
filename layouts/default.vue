<template>
  <div id="layout-container">
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
  html,body, #__nuxt, #__layout, #layout-container{
    height:100%!important;
    width: 100%!important;
  }
</style>

