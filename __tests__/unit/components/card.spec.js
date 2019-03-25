import React from 'react';
import Card from '../../../src/js/components/card';
describe('Contact Component', () => {
  let component;
  let card;

  beforeEach(() => {
    card = {
      MoonpigProductNo: 1234,
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

  it('should set expandDetails in state to true when card image is clicked', () => {
    component.setState({ expandDetails: false });
    const cardImage = component.find('a').first();
    cardImage.simulate('click');
    expect(component.state().expandDetails).toBe(true);
  });
});