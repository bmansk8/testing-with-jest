import { NASARover } from '../components/NASARover';
import { shallow } from 'enzyme';
import React from 'react';
import "../../setupTest"
import roverPhotos from '../components/services/roverPhotos';

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
})


it('roverphotos() is mocked and returning data', async () => {
  await expect(roverPhotos()).resolves.toStrictEqual([
    {
      "img_src": '123abc',
      "id": '0'
    },
    {
      "img_src": 'abc123',
      "id": '1'
    }
  ])
})
