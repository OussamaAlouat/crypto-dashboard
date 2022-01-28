import { shallowMount } from '@vue/test-utils';
import CryptoNav from '@/components/CryptoNav.vue';


describe('CryptoHeader.vue', () => {
  it('The component render', () => {
    const title = 'Hi Oussama'
    const wrapper = shallowMount(CryptoNav, {
      propsData: { title },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.text()).toBe(title);
    expect(wrapper.is(CryptoNav)).toBe(true);
  });

  it('When no pass the prop, there are an error', () => {
    const wrapper = shallowMount(CryptoNav, {
    });

    expect(wrapper.props().title).toBeUndefined();
  });
});
