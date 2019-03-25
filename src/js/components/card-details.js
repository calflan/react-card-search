import React from 'react';
import Loader from './loader';

export default class CardDetails extends React.Component {
	constructor() {
		super();

		this._handleClose = this._handleClose.bind(this);
    this._createDescription = this._createDescription.bind(this);
	}

	render() {
		return (
			<article role="dialog" className={`card-listings__card-details ${this.props.options.isOpen ? "" : "card-listings__card-details--hidden"}`}>
				<a role="overlay" className="card-listings__card-details-overlay" onClick={this._handleClose}></a>
				<div className="card-listings__card-details-inner">
					{this.props.status !== "loading" | "error" ?
						<React.Fragment>
							<a role="closelink" className="card-listings__card-details-close" onClick={this._handleClose}>X</a>
              <img role="productimage" src={this.props.details.ImageUrls[0].ImageUrl} alt={this.props.details.Title} />
							<section className="card-listings__card-details-inner-information">
								<h3 role="heading">{this.props.details.Title}</h3>

								{this.props.details.InStock ?
									<h4 role="productstockstatus" className="card-listings__card-details-stock-status--inStock">In stock &#10003;</h4>
								:
									<h4 role="productstockstatus" className="card-listings__card-details-stock-status--outOfStock">Sorry, this product is out of stock!</h4>
                }

								<ul>
                  <h4 role="productsizesheading">Sizes available</h4>
									{this.props.details.AvailableSizes.map((size, index) => {
										return <li role="productsizelistitem" key={index}>{size.DisplayName} - £{size.Price}</li>
									})}
								</ul>

                <h4 role="descriptionheading">Description</h4>
                <p role="description" dangerouslySetInnerHTML={this._createDescription()}/>
							</section>
						</React.Fragment>
					: 
						<Loader />
					}
				</div>
			</article>
		);
	}

	_createDescription() {
		return {__html: this.props.details.Description};
	}

	_handleClose() {
    this.props.options.detailsExpanded();
  }
}