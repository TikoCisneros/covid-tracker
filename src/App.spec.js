import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Layout').length).toBe(1);
  });
});

