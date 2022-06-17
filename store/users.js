export const state = () => ({
  users: [],
  activeUser: {}
});

export const mutations = {
  initUsers( state, users ){
    state.users = users;
  },
  // 메뉴에 active css 제거
  removeActiveClassToUsers( state ){
    state.users.forEach(function( user ){
      user.isActive = '';
      state.activeUser = {};
    });
  },
  // 메뉴에 active css 추가
  addActiveClassToUserByName( state, name ){
    let title = state.users.reduce(function( acc, cur ){
      if( cur.name == name ){
        acc = cur;
      }
      return acc;
    }, {});

    if( state.activeUser.name == name ){
      state.activeUser.isActive = '';
      state.activeUser = {};
      return false;
    };

    if( !state.activeUser.name ){
      state.activeUser.isActive = '';
      state.activeUser = title;
      title.isActive = 'is-active';
      return true;
    };

    if( state.activeUser.name != name ){
      state.activeUser.isActive = '';
      state.activeUser = title;
      title.isActive = 'is-active';
      return true;
    };
  },
  getActiveUser( state ){
    return state.activeUser;
  }
};
