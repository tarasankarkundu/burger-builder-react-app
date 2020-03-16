import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems /> tests', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })

    it('should create 2 <NavigationItem /> if not authenticated', ()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

    it('should create 3 <NavigationItem /> if authenticated', ()=>{
        wrapper.setProps({'isAuthenticated': true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })

    it('should contain logout link if authenticated', ()=>{
        wrapper.setProps({'isAuthenticated': true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    })
})