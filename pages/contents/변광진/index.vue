<template>
  <div class="layout-index">
    <Header></Header>
    변광진 소개 페이지 입니다.
    <div v-html="contents"></div>
  </div>
</template>

<script>
import contents from './md/contents.md'

export default {
  name: 'IndexPage',
  components: {
  },
  data: function(){
    return {
      users: [],
      userContents: []
    }
  },
  computed: {
    contents() {
      return contents
    }
  },
  methods: {
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss">
</style>
