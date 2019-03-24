import React from 'react';
import CardDetails from './card-details';
import CardListingsService from '../services/card-listings-service';

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
	}
	
	render() {
		return (
			<React.Fragment>
				<a id="card-image" onClick={this._handleCardExpand}>
					<img src={this.props.card.ProductImage.Link.Href} alt={this.props.card.Title} />
				</a>
				<p>Reviews ({this.props.card.Reviews.ReviewCount})</p>

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
		// let cardId = window.location.pathname.replace('/card-details/', '');
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

}