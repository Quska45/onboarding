<template>
  <div class="layout-index">
    <Header></Header>
    test user2 test2입니다.
    <disqus shortname='test-quska' />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  name: "test2",
  components: {
    Disqus
  }
}
</script>

<style lang="scss">

</style>
