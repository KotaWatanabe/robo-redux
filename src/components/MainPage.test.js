import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() })

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchFiled:'',
        isPending:false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('expcet to render MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots:[{
          id:3,
          name:'John',
          email:'john'
        }],
        searchFiled:'a',
        isPending:false
    }
    // const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper.instance().filteredRobots()).toEqual([])
    // expect(wrapper2.instance().filteredRobots()).toEqual([])
})
