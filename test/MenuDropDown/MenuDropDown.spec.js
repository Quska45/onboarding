import {mount, shallowMount} from '@vue/test-utils'
import MenuDropDown from '@/components/Nav/MenuDropDown.vue'

describe('MenuDropDown', () => {
  test('MenuDropDownJs shallowMount ', () => {
    const mockRoute = {
      path: '/contents/testuser2/test2'
    };

    const wrapper = shallowMount(MenuDropDown, {
      mocks: {
        $route: mockRoute
      },
      propsData: {
        name: '변광진'
      }
    });

    expect(wrapper.vm).toBeTruthy()
  });

  test('MenuDropDownJs mount with stubing ', () => {
    const mockRoute = {
      path: '/contents/testuser2/test2'
    };

    const wrapper = mount(MenuDropDown, {
      mocks: {
        $route: mockRoute
      },
      propsData: {
        name: '변광진'
      },
      stubs: {
        NuxtLink: true
      }
    });

    expect(wrapper.vm).toBeTruthy()
  })
});
