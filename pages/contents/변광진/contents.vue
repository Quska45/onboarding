<template>
  <div class="layout-index">
    변광진 contents입니다.
<!--    <section class='comments' aria-labelledby="comment">-->
<!--      <h2 id="comment">Comments</h2>-->
      <disqus shortname='test-quska' />
<!--    </section>-->
  </div>
</template>

<script>
import {Disqus} from 'vue-disqus'
export default {
  name: "contents",
  components: {
    Disqus
  }
}
</script>

<style lang="scss">

</style>
