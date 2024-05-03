() => { 
  cy.get('button').first().click().then(() => { 
    cy.get('.modal').should('be.visible'); 
    cy.get('.close').click().then(() => {
      cy.wait(500); // Adding a small delay to ensure modal is fully closed
      cy.get('.modal').should('not.be.visible');
    });
  }); 
}
