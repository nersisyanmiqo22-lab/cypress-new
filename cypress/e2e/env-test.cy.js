/// <reference types="cypress" />

describe('առաջադրանքներ', () => {
  it('օգտագործում ենք json', () => {
   const USERNAME = Cypress.env('USERNAME');
   const PASSWORD = Cypress.env('PASSWORD');
   const SEARCH_TERM = Cypress.env('SEARCH_TERM');


   cy.log('Username:', USERNAME);
   cy.log('Password:', PASSWORD);
   cy.log('Search Term:', SEARCH_TERM);
   cy.visit('https://www.google.com');
   cy.get('textarea[name="q"]').type(SEARCH_TERM + '{enter}');
   cy.contains(SEARCH_TERM).should('exist');
  });
});