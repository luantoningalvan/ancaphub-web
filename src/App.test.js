import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Smoke test for basic rendering of main App component', () => {
  it('Should shallow render App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
