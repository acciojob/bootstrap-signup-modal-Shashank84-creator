cy.get('button').first().click().then(() => {
  cy.get('.modal').should('exist').and('be.visible');
  cy.get('.close').click().then(() => 
    cy.get('.modal').should('not.be.visible')
  );
});
