import App from '../src/components/App';
import React from 'react';
import { shallow } from 'enzyme';

// eslint-disable-next-line no-undef
describe('App Component', ()=> {
    // eslint-disable-next-line no-undef
    test('should match snapshot', ()=>{
        const component = shallow(<App />);
        // eslint-disable-next-line no-undef
        expect (component.find('h1').text()).toBe('Welcome to Ireporter');
        // eslint-disable-next-line no-undef
        expect(component).toMatchSnapshot;
    });
});