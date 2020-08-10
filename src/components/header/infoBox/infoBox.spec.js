import React from 'react';
import { shallow } from 'enzyme';

import { Card } from '@material-ui/core';
import InfoBox from './infoBox';

describe('InfoBox component', () => {
  it('renders correctly', () => {
    const props = {
      title: 'TITLE',
      value: 2000,
    };
    const wrapper = shallow(<InfoBox {...props} />);
    expect(wrapper.find(Card).length).toBe(1);
  });
});

