/// <reference types="Cypress" />

context('Selecting a card', () => {
	context('As a customer I can view a list of availble cards and inspect their details on my mobile, tablet and desktop so that I can celebrate my new job', () => {
		it('should visit the card listings page and select a card', () => {
			cy.visit('card-listings.html');
			cy.get('#card1').click();
		});
	});
});