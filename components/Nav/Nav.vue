<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        open
      >
        <div class="p-1">
          <div class="block">
            <nuxt-link to="/">
              <img
                src="../../public/sehyunict_CI_72.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
            </nuxt-link>
          </div>
        </div>

        <MenuDropDown
          v-for="user in users"
          :key="user.name"
          :name="user.name"
          :isActive="user.isActive"
        >
        </MenuDropDown>

      </b-sidebar>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import MenuDropDown from "./MenuDropDown";
import users from "../../pages/users.json";

export default {
    name: 'Nav',
    components:{
      MenuDropDown
    },
    data() {
      return {
        users: {}
      };
    },
    methods:{
      ...mapMutations({
        initUsers: 'users/initUsers',
      })
    },
    created() {
      this.$store.commit( 'users/initUsers', users )
      this.users = this.$store.state.users.users;
    }
}
</script>
<style lang="scss">
a {
  color: #4a4a4a;
}
.p-1 {
  padding: 1em;
}
.sidebar-content {
  height: 100%;
}
.sidebar-show-button {
  position: absolute;
  left: 0px;
}
.sidebar-hide-button {
  position: absolute;
  left: 260px;
}
</style>
