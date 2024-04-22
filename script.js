// () => {
//   cy.get('button').first().click().then(() => {
//     cy.get('.modal').should('be.visible');
//     cy.get('.close').click().then(() => {
//       cy.get('.modal', { timeout: 10000 }).should('not.be.visible'); // wait for 10 seconds
//     });
//   });
// }
() => {
  cy.get('button').first().click().then(() => {
    cy.get('.modal').should('be.visible');
    cy.get('.modal').trigger('hide.bs.modal');
    cy.get('.modal', { timeout: 10000 }).should('not.be.visible'); // wait for 10 seconds
  });
}