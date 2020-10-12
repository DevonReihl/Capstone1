import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MemberInfo from './MemberInfo'

describe(`MemberInfo component`, () => {
  const props = {
    id: 1,
    itemname: 'test-name',
    itemtext: 'test-text',
    itemtype: 'test-type',
    points: 20,
  }

  it('renders a .MemberInfo by default', () => {
    const wrapper = shallow(<MemberInfo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the MemberInfo given props', () => {
    const wrapper = shallow(<MemberInfo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})