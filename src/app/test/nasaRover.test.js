import { NASARover } from '../components/NASARover';
import { shallow } from 'enzyme';
import React from 'react';
import "../../setupTest"

jest.mock("../components/services/roverPhotos")

it("renders h1 correctly", () => {
  const wrapper = shallow(<NASARover />);

  expect(wrapper.find('#roverH1')).toExist();
  expect(wrapper.find('#roverH1')).toHaveClassName('text-center');
});

it('renders imgs correctly', () => {
  const wrapper = shallow(<NASARover />);

  expect(wrapper.find('img')).toExist();
  expect(wrapper.find('img')).toHaveProp('alt');
  expect(wrapper.find('img')).toHaveProp('src');

  expect(wrapper.find('img').first()).toHaveProp('src', 'searching...');

  //wrapper.update();
  //expect(wrapper.find('img').first()).toHaveProp('src','123abc')
})
