<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        open
        :can-cancel="['x', 'outside']"
      >
        <div class="p-1">
          <div class="block">
            <img
              // src="../../../VUETALK/public/sehyunict_CI_72.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </div>
        </div>

        <MenuDropDown v-for="user in users" :key="user.name" :name="user.name" :isActive="user.isActive">
        </MenuDropDown>

      </b-sidebar>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import MenuDropDown from "./MenuDropDown";

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
      }),
      async _initUsers(){
        let users = await this.$axios.$get( '/api/filePath/users' );
        this.$store.commit( 'users/initUsers', users )
        this.users = this.$store.state.users.users;
      }
    },
    created() {
      this._initUsers();
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
