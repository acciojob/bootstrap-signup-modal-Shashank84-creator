() => {
  cy.get('button').first().click().then(() => {
    cy.get('.modal').should('be.visible');
    cy.get('.close').click();
    cy.wait(1000); // Wait for 1 second
    cy.get('.modal').should('not.be.visible');
  });
}