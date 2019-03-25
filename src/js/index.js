import React from 'react';
import { render } from 'react-dom';
import CardListings from './components/card-listings';

var cardListingsElement = document.getElementById('react-card-listings-component');

render(
  <CardListings />, 
  cardListingsElement
);