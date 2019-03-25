/// <reference types="Cypress" />

context('Selecting a card', () => {
	context('As a customer I can view a list of availble cards and inspect their details on my mobile, tablet and desktop so that I can celebrate my new job', () => {
		it('should visit the card listings page and select a card', () => {
      cy.visit('card-listings.html');
      cy.expect(':nth-child(1) > .card-image > img').to.exisit;
      cy.get(':nth-child(1) > .card-image').focus();
      cy.get(':nth-child(2) > .card-image').focus();
			cy.get(':nth-child(2) > .card-image').click();
    });
    
    it('should see card details', () => {
      cy.expect('.card-listings__card-details-inner > img').to.exist;
      cy.expect('.card-listings__card-details-inner-information').to.exist;
    });

    it('should close card details and choose another card', () => {
      cy.get('.card-listings__card-details-close').focus();
      cy.get('.card-listings__card-details-close').click();
      cy.expect(':nth-child(3) > .card-image > img').to.exisit;
      cy.get(':nth-child(3) > .card-image').focus();
			cy.get(':nth-child(3) > .card-image').click();
    });
	});
});