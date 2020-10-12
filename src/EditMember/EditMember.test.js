import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditMember from './EditMember'

describe(`EditMemberForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<EditMember />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})