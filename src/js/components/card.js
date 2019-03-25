import React from 'react';
import Utils from './shared/utilities';
import CardDetails from './card-details';
import CardListingsService from '../services/card-listings-service';
import StarRatings from 'react-star-ratings';

export default class Card extends React.Component {
	constructor() {
		super();

		this.state = {
			cardDetails: {},
			status: "loading",
			expandDetails: false
		}

		this._handleCardExpand = this._handleCardExpand.bind(this);
		this._toggleCardExpand = this._toggleCardExpand.bind(this);
    this._toggleLockScroll = this._toggleLockScroll.bind(this);
    this._handleEnterKey = this._handleEnterKey.bind(this);
  }
	
	render() {
		return (
			<React.Fragment>
				<a role="link" href="#" id="card-image" onClick={this._handleCardExpand}>
					<img role="img" src={this.props.card.ProductImage.Link.Href} alt={this.props.card.Title} />
				</a>

        <div class="card-listings__card-reviews">
          <StarRatings
            rating={this.props.card.Reviews.AverageStarReviewRating}
            starRatedColor="pink"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="0px"
          />
          <span>({this.props.card.Reviews.ReviewCount})</span>
        </div>


				{this.state.expandDetails &&
					<CardDetails details={this.state.cardDetails} status={this.state.status} options={{ isOpen: this.state.expandDetails, detailsExpanded: this._toggleCardExpand }} />
				}
			</React.Fragment>
    );
  }

	_toggleLockScroll() {
		document.body.classList.toggle("body--lock-scroll");
	}
	
	_toggleCardExpand() {
		const expandDetails = this.state.expandDetails;
		this.setState({ expandDetails: !expandDetails }, () => {
			this._toggleLockScroll();
		});
  }
  
  
	_handleCardExpand() {
		let cardId = this.props.card.MoonpigProductNo;

		CardListingsService.getCardDetailsById(cardId)
    .then((details) => {
      this.setState({ 
        cardDetails: details,
        status: "complete"
      });
    })
    .catch(() => {
      this.setState({
        status: "error"
      });
    });
		
		this._toggleCardExpand();
  }

  _handleEnterKey() {
    Utils.onEnterPress();
  }
}