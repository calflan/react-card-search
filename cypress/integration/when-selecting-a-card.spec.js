/// <reference types="Cypress" />

context('Selecting a card', () => {
	context('As a customer I can view a list of availble cards and inspect their details on my mobile, tablet and desktop so that I can celebrate my new job', () => {
		it('should visit the card listings page and select a card', () => {
      cy.visit('card-listings.html');
      cy.expect(':nth-child(1) > #card-image > img').to.exisit;
			cy.get(':nth-child(1) > #card-image > img').click();
    });
    
    it('should see card details', () => {
      cy.expect('.card-listings__card-details-inner > img').to.exist;
      cy.expect('.card-listings__card-details-inner-information').to.exist;
    });
	});
});