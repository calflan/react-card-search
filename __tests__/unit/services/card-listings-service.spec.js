import {getCards, getCardDetailsById} from '../../../src/js/services/card-listings-service';
import axios from 'axios';

jest.mock('axios');

describe('Card Listings Service', () => {
  let cardListings;
  let cardDetail;

  beforeEach(() => {
    cardListings = {
      data: {
        Products: [
          {
            Price: {  
              Value: 3.29,
              Currency: "£"
            },
            SoldOut: 0,
            Title: "Classic Portrait Personalised Photo Upload Card"
          },
          {
            Price: {  
              Value: 3.99,
              Currency: "£"
            },
            SoldOut: 0,
            Title: "Classic Portrait Personalised Photo Upload Card"
          }
        ]
      }
    };

    cardDetail = {
      data: {
        Product: {
          Price: 2.99,
          ImageUrl: "http://someimageurl.com"
        }
      }
    }
  });

  it('should return a list of cards', () => {
    const resp = cardListings;
    axios.get.mockImplementation(() => Promise.resolve(resp));

    return getCards().then(response => expect(response).toEqual(cardListings.data.Products));
  });

  it('should return the details of a card from the specified ID', () => {
    const id = 1;
    const resp = cardDetail;
    axios.get.mockResolvedValue(resp);

    return getCardDetailsById(id)
      .then(response => expect(response).toEqual(cardDetail.data));
  });
});