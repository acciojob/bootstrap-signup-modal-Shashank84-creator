cy.get('button').first().click().then(() => {
  cy.get('.modal').should('be.visible');
  cy.get('.close').then(($close) => {
    expect($close).to.have.length(1);
    cy.wrap($close).click({ force: true });
    cy.wait(1000);  // adjust the delay as per your need
    cy.get('.modal').should('not.be.visible');
  });
});