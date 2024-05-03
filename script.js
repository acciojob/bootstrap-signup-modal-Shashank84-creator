// cy.get('button').first().click().then(() => {
//   cy.get('.modal').should('be.visible');
//   cy.get('.close').click({ force: true });
//   cy.waitUntil(() =>!cy.get('.modal').hasClass('show'));
//   cy.get('.modal').should('not.be.visible');
// });

// cy.get('button').first().click().then(() => {
//   cy.get('.modal').should('be.visible');
//   cy.get('.close').click({ force: true });
//   cy.waitUntil(() =>!cy.get('.modal').hasClass('show'));
//   cy.get('.modal').should('not.be.visible', { timeout: 6000 });
// });
// cy.get('button').first().click().then(() => {
//   cy.get('.modal').should('be.visible');
//   cy.get('.close').click({ force: true });
//   cy.log('Close button clicked');
//   cy.waitUntil(() =>!cy.get('.modal').hasClass('show'));
//   cy.log('Waiting for modal to be closed');
//   cy.get('.modal').should('not.be.visible');
//   cy.log('Modal should not be visible');
// });