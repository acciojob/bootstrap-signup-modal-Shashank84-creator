//your JS code here. If required.
describe("Signup Modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // replace with your local server address
  });

  it("should open the modal when the 'Sign Up' button is clicked", () => {
    cy.get('.modal').should('not.be.visible');
    cy.get('button').first().click();
    cy.get('.modal').should('be.visible');
  });

  it("should close the modal when the close button is clicked", () => {
    cy.get('button').first().click();
    cy.get('.modal').should('be.visible');
    cy.get('.close').click();
    cy.wait(500); // wait for the closing animation to complete
    cy.get('.modal').should('not.be.visible');
  });

  it("should contain the correct form elements", () => {
    cy.get('.modal').within(() => {
      const tags = ['form', 'label', "input[type='email']", "input[type='password']"];
      tags.forEach(tag => {
        cy.get(tag).should('have.length.at.least', 1);
      });
    });
  });
});