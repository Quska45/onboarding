// 현재 active class를 가지고 있는 메뉴
let activeTitle = {};

/*
* 상태를 배열 / 객체로 관리 하는 것은 어떤 차이가 있을까? 이번 기회에 확실한 내 스타일을 정해 보려고 한다.
* menus는 배열로 관리하고 나머지는 객체로 관리해보면서 어떤게 편한지 생각해보자.
* */
export const state = () => ({
  users: [
    {
      name: '변광진',
      isActive: ''
    },
    {
      name: '변광진1',
      isActive: ''
    },
  ]
});

export const mutations = {
  async initMenus( state, users ){
    state.users = await this.$axios.$get( '/api/filePath/users' );
  },
  // 메뉴에 active css 제거
  removeActiveClassToMenus(){
    this.state.users.forEach(function( title ){
      title.isActive = ''
    });
  },
  // 메뉴에 active css 추가
  addActiveClassToMenuByName( state, name ){
    console.log(arguments)
    let title = state.users.reduce(function( acc, cur ){
      if( cur.name == name ){
        acc = cur;
      }
      return acc;
    }, {});

    if( activeTitle.name == name ){
      activeTitle.isActive = '';
      activeTitle = {};
      return false;
    };

    if( !activeTitle.name ){
      activeTitle.isActive = '';
      activeTitle = title;
      title.isActive = 'is-active';
      return true;
    };

    if( activeTitle.name != name ){
      activeTitle.isActive = '';
      activeTitle = title;
      title.isActive = 'is-active';
      return true;
    };
  }
};
