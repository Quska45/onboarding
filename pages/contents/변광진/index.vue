<template>
  <div class="layout-index">
    <Header></Header>
    변광진 소개 페이지 입니다.
<!--    <div v-html="hello"></div>-->
<!--    <div v-html="$md.render(md_content)" />-->
    <div v-html="$md.render(post)"></div>
  </div>
</template>

<script>
// import contents from './md/contents.md'

export default {
  name: 'IndexPage',
  components: {
  },
  data: function(){
    return {
      users: [],
      userContents: [],
      // md_content: '# Hello World',
      post: '# Goの変数宣言\n解説します。\n```go\nvar name = "go"\n```\n![]()\n'

    }
  },
  computed: {
    // hello() {
    //   return contents;
    // }
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
