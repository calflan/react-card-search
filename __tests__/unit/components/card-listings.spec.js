import React from 'react';
import CardListing from '../../../src/js/components/card-listings';

describe('Contact Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardListing />);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});