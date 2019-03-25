import React from 'react';
import CardListings from '../../../src/js/components/card-listings';
import Card from '../../../src/js/components/card';
import CardListingsService from '../../../src/js/services/card-listings-service';

describe('Contact Component', () => {
  let component;
  let cards;

  beforeEach(() => {
    cards = [
      {
        ProductId: 48939,
        ProductImage: {
          Link: {
            Href: "http://someimageurl.com"
          }
        },
        Reviews: {
          ReviewCount: 2345
        }
      }
    ]

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

  it('should call handleCardExpand and set cardDetails and status in state to complete when card image is clicked', () => {
    component.setState({ cards: [], status: "loading" });

    spyOn(CardListingsService, "getCards").and.returnValue(Promise.resolve(cards));

    component.instance().componentDidMount(() => {
      expect(component.state().cards).toEqual(cards);
      expect(component.state().status).toEqual("complete");
    });
  });

  it('should set status to error in state when request to API fails', () => {
    component.setState({ cards: [], status: "loading" });
    
    spyOn(CardListingsService, "getCards").and.returnValue(Promise.reject());

    component.instance().componentDidMount(() => {
      expect(component.state().cards).toEqual(cards);
      expect(component.state().status).toEqual("error");
    });
  });
});