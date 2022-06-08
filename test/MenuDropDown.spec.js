import { mount } from '@vue/test-utils'
import MenuDropDown from '@/components/Nav/MenuDropDown.vue'

describe('MenuDropDown', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MenuDropDown)
    expect(wrapper.vm).toBeTruthy()
  })
})
