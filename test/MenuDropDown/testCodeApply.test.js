import {mount, shallowMount} from '@vue/test-utils'
import MenuDropDown from '@/components/Nav/MenuDropDown.vue'

describe('MenuDropDown', () => {
  test('MenuDropDownJs load test', () => {
    const wrapper = mount(MenuDropDown);

    expect(wrapper.vm).toBeTruthy()
  });
});
