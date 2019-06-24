import App from '../src/components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App Component', ()=> {
    it('should match snapshot', ()=>{
        const component = shallow(<App />);
        expect (component.find('h1').text()).toBe('Welcome to Ireporter');
        expect(component).toMatchSnapshot;
    });
});