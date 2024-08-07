cy.get('button.btn-danger')
  .click()
  .then(() => {
    cy.get('#signupModal')
      .should('be.visible') // Check if modal is visible
      .then(() => {
        cy.get('.close')
          .click() // Click the close button
          .then(() => {
            // Wait for the modal to become not visible
            cy.get('#signupModal').should('not.be.visible', { timeout: 6000 });
          });
      });
  });
