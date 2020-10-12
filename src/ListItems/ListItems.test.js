import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListItems from './ListItems'

describe(`ListItems component`, () => {
  const props = {
    id: 1,
    itemname: 'test-name',
    itemtext: 'test-text',
    itemtype: 'test-type',
    points: 20,
  }

  it('renders a .ListItems by default', () => {
    const wrapper = shallow(<ListItems />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ListItems given props', () => {
    const wrapper = shallow(<ListItems {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})