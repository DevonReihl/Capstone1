import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddItem from './AddItem'

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
