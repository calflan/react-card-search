import axios from 'axios';

const getCards = () => {
	return axios.get("https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1")
		.then(results => results);
}

const getCardDetailsById = (moonpigProductNo) => {
	return axios.get(`https://www.moonpig.com/uk/api/product/product/?mpn=${moonpigProductNo}`)
		.then(details => details);
}

export {getCards, getCardDetailsById};