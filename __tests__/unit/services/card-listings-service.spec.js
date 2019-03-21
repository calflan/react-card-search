import {getCards, getCardDetailsById} from '../../../src/js/services/card-listings-service';
import axios from 'axios';

jest.mock('axios');

describe('Card Listings Service', () => {
  let cardListings;

  beforeEach(() => {
    cardListings = { 
      "Products":[
        {
          "Price":{  
            "Value":3.29,
            "Currency":"£"
          },
          "SoldOut":0,
          "Title":"Classic Portrait Personalised Photo Upload Card"
        },
        {
          "Price":{  
            "Value":3.99,
            "Currency":"£"
          },
          "SoldOut":0,
          "Title":"Classic Portrait Personalised Photo Upload Card"
        }
      ]
    };
  });

  it('should return a list of cards', () => {
    const resp = {response: cardListings};
    axios.get.mockImplementation(() => Promise.resolve(resp));

    return getCards().then(resp => expect(resp.response).toEqual(cardListings));
  });

  it('should return the details a card from the specified ID', () => {
    const id = 1;
    const resp = {response: cardListings.Products[id]};
    axios.get.mockImplementation(() => Promise.resolve(resp));

    console.log(resp);

    return getCardDetailsById(id)
      .then(resp => expect(resp.response).toEqual(cardListings.Products[id]));
  });
});