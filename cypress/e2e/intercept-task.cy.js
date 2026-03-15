/// <reference types="cypress" />
describe('Intercept test', () => {
  it('առաջադրանք', () => {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {
        expect(req.body).to.have.property('title');
        req.reply({
    statusCode: 201,
    body: { id: 101 }
  });
}).as('createPost');
    cy.visit('https://jsonplaceholder.typicode.com');
    cy.wait('@createPost');
    });
});
