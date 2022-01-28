import { shallowMount } from '@vue/test-utils';
import CryptoHeader from '@/components/CryptoHeader.vue';


describe('CryptoHeader.vue', () => {
  it('The component render', () => {
    const title = 'Hi Oussama'
    const wrapper = shallowMount(CryptoHeader, {
      propsData: { title },
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toBe(title);
    expect(wrapper.is(CryptoHeader)).toBe(true);
  });

  it('When no pass the prop, there are an error', () => {
    const wrapper = shallowMount(CryptoHeader, {
    });

    expect(wrapper.props().title).toBeUndefined();
  });
});
