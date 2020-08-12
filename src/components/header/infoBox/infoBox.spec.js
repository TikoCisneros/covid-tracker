import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './infoBox.styles';
import InfoBox from './infoBox';
import { deathPropsData, recoveredPropsData, confirmedPropsData } from './infoBox.stories';


describe('InfoBox component', () => {
  it('renders deaths design correctly', () => {
    const wrapper = shallow(<InfoBox {...deathPropsData} />);
    expect(wrapper.find(Card).length).toBe(1);
  });
  it('renders recovered design correctly', () => {
    const wrapper = shallow(<InfoBox {...recoveredPropsData} />);
    expect(wrapper.find(Card).length).toBe(1);
  });
  it('renders confirmed design correctly', () => {
    const wrapper = shallow(<InfoBox {...confirmedPropsData} />);
    expect(wrapper.find(Card).length).toBe(1);
  });
});

