import React from 'react';
import Card from '../../../src/js/components/card';

describe('Contact Component', () => {
  let component;
  let card;

  beforeEach(() => {
    card = {
      ProductImage: {
        Link: {
          Href: "http://someimage.com"
        }
      },
      Reviews: {
        ReviewCount: "1234"
      }
    }

    component = shallow(<Card card={card} />);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should toggle the card details', () => {
    component.setState({ expandDetails: false });
    const cardImage = component.find('#card-image');
    cardImage.simulate('click');
    expect(component.state().expandDetails).toBe(true);
  });
});