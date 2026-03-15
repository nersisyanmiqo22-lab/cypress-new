/// <reference types="cypress" />

class ActionsPage {

  visit() {
    cy.visit('https://example.cypress.io/commands/actions');
  }
    typeEmail(email) {
    this.getEmailInput().type(email);
  }
    getEmailInput() {
    return cy.get('.action-email');
  }
    getFirstCheckbox() {
    return cy.get('.action-multiple-checkboxes [type="checkbox"]').first();
  }
  checkFirstCheckbox() {
    this.getFirstCheckbox().check();
  }
    getSelect() {
    return cy.get('.action-select');
  }
  selectFruit(fruit) {
    this.getSelect().select(fruit);
  }
}

export default new ActionsPage();