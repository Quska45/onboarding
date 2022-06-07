// 현재 active class를 가지고 있는 메뉴
let activeUser = {};

export const state = () => ({
  users: []
});

export const mutations = {
  initUsers( state, users ){
    state.users = users;
  },
  // 메뉴에 active css 제거
  removeActiveClassToUsers( state ){
    console.log('삭제함?');
    state.users.forEach(function( user ){
      user.isActive = '';
      activeUser = {};
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

    if( activeUser.name == name ){
      activeUser.isActive = '';
      activeUser = {};
      return false;
    };

    if( !activeUser.name ){
      activeUser.isActive = '';
      activeUser = title;
      title.isActive = 'is-active';
      return true;
    };

    if( activeUser.name != name ){
      activeUser.isActive = '';
      activeUser = title;
      title.isActive = 'is-active';
      return true;
    };
  },
  getActiveUser(){
    return activeUser;
  }
};
