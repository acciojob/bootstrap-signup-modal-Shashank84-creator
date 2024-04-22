() => {
  cy.get('button').first().click().then(() => {
    cy.get('.modal').should('be.visible');
    cy.get('.close').click().then(() => {
      cy.get('.modal').should('not.be.visible');
    });
  });
}
