import React from 'react';
import Header from '../../../../src/js/components/shared/header';

describe('Contact Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});