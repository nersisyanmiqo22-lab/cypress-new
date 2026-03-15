/// <reference types="cypress" />
import ActionsPage from '../support/pages/actionsPage';

describe('Page Object Model test', () => {
  it('uses ActionsPage methods', () => {
    ActionsPage.visit();

    ActionsPage.typeEmail('test@email.com');
    ActionsPage.getEmailInput().should('have.value', 'test@email.com');

    ActionsPage.selectFruit('apples');
    ActionsPage.getSelect().should('have.value', 'fr-apples');

    ActionsPage.checkFirstCheckbox();
    ActionsPage.getFirstCheckbox().should('be.checked');
  });
});