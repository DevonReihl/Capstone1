import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddMember from './AddMember'

describe(`AddMemberForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddMember />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})