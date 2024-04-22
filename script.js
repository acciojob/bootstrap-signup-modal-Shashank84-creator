() => {
  cy.get('button').first().click().then(() => {
    cy.get('.modal').should('be.visible');
    cy.get('.modal').trigger('hide.bs.modal');
    cy.get('.modal').should('not.be.visible');
  });
}