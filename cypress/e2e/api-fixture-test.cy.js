describe('API + UI', () => {
  it('creates post via API and checks UI', () => {
    cy.pause();
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'UI Test',
      body: 'Check if UI shows this',
      userId: 5
    }).then((post) => {
      cy.visit('https://jsonplaceholder.typicode.com');
      cy.contains(post.body.title).should('exist'); 
    });
  });
});