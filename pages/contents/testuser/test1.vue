<template>
  <div class="layout-index">
    <Header></Header>
    test user test1입니다.
    <disqus shortname='test-quska' />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  name: "test1",
  components: {
    Disqus
  }
}
</script>

<style lang="scss">

</style>
