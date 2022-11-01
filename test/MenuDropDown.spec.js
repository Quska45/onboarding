import { mount } from '@vue/test-utils'
import MenuDropDown from '@/components/Nav/MenuDropDown.vue'

describe('MenuDropDown', () => {
  test('is a Vue instance', () => {
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
})
