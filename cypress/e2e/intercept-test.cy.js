describe('Intercept test', () => {
  it('mocks page load', () => {
    cy.intercept('GET', 'https://example.cypress.io/**', {
      statusCode: 200,
      body: '<html><body><h1>Mocked Page</h1></body></html>'
    }).as('mockPage');

    cy.visit('https://example.cypress.io');
    cy.wait('@mockPage');
    cy.contains('Mocked Page').should('be.visible');
  });
});