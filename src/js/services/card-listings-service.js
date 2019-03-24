const axios = require('axios');
const cors_api_url = "https://cors-anywhere.herokuapp.com/";

module.exports = {
	getCards() {
		return axios.get(`${cors_api_url}https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1`)
			.then(results => { return results.data.Products });
	},
	
	getCardDetailsById(moonpigProductNo) {
		return axios.get(`${cors_api_url}https://www.moonpig.com/uk/api/product/product/?mpn=${moonpigProductNo}`)
			.then(details => { return details.data });
	}
}