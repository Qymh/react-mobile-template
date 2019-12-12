import Home from '../index';
import { createTemplate } from '../../../utils/tests';

describe('Home', () => {
  it('click', () => {
    const { wrapper } = createTemplate(Home);
    expect(wrapper.find('.template').text()).toBe('react template 0');
    wrapper.find('.template').simulate('click');
    expect(wrapper.find('.template').text()).toBe('react template 1');
  });

  it('sagaClick', () => {
    const { wrapper, store } = createTemplate(Home, { counter: 0 });
    expect(wrapper.find('.saga-template').text()).toBe('saga template 0');
    wrapper.find('.saga-template').simulate('click');
    expect(store.getActions()).toStrictEqual([
      {
        counter: 1,
        type: 'increase'
      }
    ]);
  });
});
