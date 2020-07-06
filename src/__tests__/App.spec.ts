import { shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  it('is vue instance', () => {

    const wrapper = shallowMount(App);
    expect(wrapper).toBeTruthy();
  });
});
