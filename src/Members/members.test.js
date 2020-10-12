import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Members from './Members'

describe(`Members component`, () => {
  const props = {
    id: 1,
    gishname: 'test-gishname',
  }

  it('renders a .Members by default', () => {
    const wrapper = shallow(<Members />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Members given props', () => {
    const wrapper = shallow(<Members {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})