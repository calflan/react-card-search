import React from 'react';
import Header from './shared/header';
import Loader from './loader';
import Card from './card';
import CardListingsService from '../services/card-listings-service';

export default class CardListings extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      status: "loading"
    }
  }

  componentDidMount() {
    CardListingsService.getCards()
      .then((response) => {
        this.setState({ 
          cards: response,
          status: "complete"
        });
      })
      .catch(() => {
        this.setState({
          status: "error"
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <main id="card-container" className="container">
          <h2 role="heading">Our New Job cards</h2>
          <ul role="listbox" class="card-listings">
            {this.state.status !== "loading" | "error" ?
              this.state.cards.map((card, index) => (
                <li role="listitem" key={index} className="card-listings__card">
                    <Card key={card.MoonpigProductNo} card={card} />
                </li>
              ))
            :
              <Loader />
            }
          </ul>

          <a href="#card-container" className="scroll-to-top">&#8679;</a>
        </main>
      </React.Fragment>
    );
  }
}