describe('API + UI on demo site', () => {
  it('logs in via UI after API check', () => {
    cy.request('GET','https://demo.applitools.com')
    .then((response)=>{
        expect(response.status).to.eq(200);
    });
    cy.visit('https://demo.applitools.com');

    cy.get('#username').type('testuser');
    cy.get('#password').type('password');
    cy.get('#login').click();
    cy.url().should('include','app-html');
    });
});