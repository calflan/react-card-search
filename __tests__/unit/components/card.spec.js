import React from 'react';
import Card from '../../../src/js/components/card';
import CardListingsService from '../../../src/js/services/card-listings-service';

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

  it('should call handleCardExpand and set cardDetails and status in state to complete when card image is clicked', () => {
    component.setState({ cardDetails: {}, status: "loading" });

    const cardListingsServicePromise = new Promise((resolve, reject) => {resolve(card)});
    spyOn(CardListingsService, "getCardDetailsById").and.returnValue(Promise.resolve(card));

    const cardImage = component.find('a').first();
    cardImage.simulate('click');

    component.instance()._handleCardExpand(() => {
      expect(component.state().cardDetails).toEqual(card);
      expect(component.state().status).toEqual("complete");
    });
  });

  it('should set status to error in state when request to API fails', () => {
    component.setState({ cardDetails: {}, status: "loading" });

    spyOn(CardListingsService, "getCardDetailsById").and.returnValue(Promise.reject());
    
    const cardImage = component.find('a').first();
    cardImage.simulate('click');

    component.instance()._handleCardExpand(() => {
      expect(component.state().status).toEqual("error");
    });
  });
});