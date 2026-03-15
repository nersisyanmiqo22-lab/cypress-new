/// <reference types="cypress" />
describe('API առաջադրանք', () => {
  it('կատարում ենք մի քանի առաջադրանք', () => {
    cy.fixture('todo').then((data) => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('title', data.title);
          cy.log('ID:', response.body.id);
        });
    });
  });
});