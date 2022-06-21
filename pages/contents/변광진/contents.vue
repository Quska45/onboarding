<template>
  <div class="layout-index">
    <Header></Header>
    변광진 contents입니다.
<!--    <div v-html="contents"></div>-->
    <disqus shortname='test-quska' />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
// import contents from './md/contents.md'

export default {
  name: "contents",
  components: {
    Disqus
  },
  computed: {
    // contents() {
    //   return contents
    // }
  }
}
</script>

<style lang="scss">

</style>
