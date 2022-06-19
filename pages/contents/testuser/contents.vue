<template>
  <div class="layout-index">
    test user contents입니다.
    <disqus shortname='test-quska' />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  name: "contents",
  components: {
    Disqus
  }
}
</script>

<style lang="scss">

</style>
