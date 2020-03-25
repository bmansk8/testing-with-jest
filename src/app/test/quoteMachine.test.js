import { QuoteMachine } from '../components/QuoteMachine';
import { shallow } from 'enzyme';
import React from 'react';
import "../../setupTest"

it("renders div container correctly", () => {
  const wrapper = shallow(<QuoteMachine />);

  expect(wrapper.find('#quote-box')).toExist();
  expect(wrapper.find('#quote-box')).toHaveClassName('mx-auto shadow-lg rounded p-3 mb-5');
});

it("renders 2 p tags for quote and author", () => {
  const wrapper = shallow(<QuoteMachine />);

  expect(wrapper.find('#quote')).toHaveDisplayName('p');
  expect(wrapper.find('#quote').first()).toHaveText('Searching...');
  expect(wrapper.find('#author')).toHaveDisplayName('p');
});

test('quote button renders correctly', () => {
  const wrapper = shallow(<QuoteMachine />);

  expect(wrapper.find('#new-quote')).toHaveClassName('btn btn-primary ml-3');
})

test('tweet button renders correctly', () => {
  const wrapper = shallow(<QuoteMachine />);

  expect(wrapper.find('#tweet-button')).toHaveClassName('btn btn-primary ml-3');
})

test('a tag in tweet button renders correctly', () => {
  const wrapper = shallow(<QuoteMachine />);

  expect(wrapper.find('#tweet-a')).toHaveProp('href', 'https://twitter.com/intent/tweet');
  expect(wrapper.find('#tweet-a')).toHaveProp('rel', 'noopener noreferrer');
  expect(wrapper.find('#tweet-a')).toHaveProp('target', '_blank');
  expect(wrapper.find('#tweet-a')).toHaveText('Tweet me!');
})