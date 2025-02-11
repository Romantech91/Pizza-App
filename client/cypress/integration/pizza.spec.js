describe('Pizza CRUD operations', () => {

    it('should create a new pizza', () => {
        // Visit the create pizza page
        cy.visit('http://localhost:3000'); // Visit the homepage

        // Fill in the pizza details
        cy.get('input[name="name"]').type('Pepperoni Pizza'); // Type the pizza name
        cy.get('input[name="descriptiion"]').type('A classic pepperoni pizza'); // Type the pizza description
        cy.get('button[type="submit"]').click(); // Click the submit button

        // Check if the pizza was created successfully
        cy.contains('Pepperoni Pizza').should('exist'); // Check if the pizza name exists on the page
    });

    it('should update an existing pizza', () => {
        // Visit the update pizza page
        cy.visit('http://localhost:3000'); // Visit the homepage

        // Find the pizza to update
        cy.get('button').contains('Update Pizza').click(); // Click the update button

        //CLear the existing pizza name and description, then update the details
        cy.get('input[name="name"]').clear().type('Updated Pizza Name'); // Clear and update the pizza name
        cy.get('button[type="submit"]').click(); // Click the submit button

        //Assert that the pizza was updated successfully
        cy.contains('Updated Pizza Name').should('exist'); // Check if the updated pizza name exists on the page
    });

    it('should delete an existing pizza', () => {
        // Visit the delete pizza page
        cy.visit('http://localhost:3000'); // Visit the homepage

        // Find the pizza to delete
        cy.get('button').contains