cy.get('button').first().click().then(() => {
  cy.get('.modal').should('be.visible');
  cy.get('.close').click({ force: true });
  cy.wait(500); // wait for 500ms to ensure the modal is closed
  cy.get('.modal').should('not.be.visible');
});