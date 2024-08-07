cy.get('button.btn-danger')
  .click() // Click the 'Sign Up' button to open the modal
  .then(() => {
    cy.get('#signupModal')
      .should('be.visible') // Assert that the modal is visible
      .then(() => {
        cy.wait(500); // Optional wait for transition to stabilize

        cy.get('.close')
          .click() // Click the close button in the modal
          .then(() => {
            // Ensure the modal has enough time to close and become invisible
            cy.get('#signupModal').should('not.be.visible', { timeout: 10000 });
          });
      });
  });
