import React from 'react';
import CardListings from '../../../src/js/components/card-listings';
import Card from '../../../src/js/components/card';

describe('Contact Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardListings />);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render Card component when status is set to complete in state', () => {
    component.setState({status: "complete"});

    const card = component.find(Card);

    expect(card).toBeDefined();
  });
});