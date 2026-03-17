describe('Percy visual test', () => {
  it('takes snapshot of homepage', () => {
    cy.visit('https://example.cypress.io');
    cy.percySnapshot('Cypress Homepage');
  });
});