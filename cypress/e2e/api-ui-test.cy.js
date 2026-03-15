describe('API + UI համատեղ (todos)', () => {
  it('API-ով ստանում է todo-ի տվյալները', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        const title = response.body.title;

        cy.visit('https://www.google.com');
        cy.get('textarea[name="q"]').type(title + '{enter}');
        cy.contains(title).should('exist');
      });
  });
});