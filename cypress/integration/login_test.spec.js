
context("Counter main", () => 
{

    it("Be on the website",()=>
    {
    cy.visit("https://www.caseative.com/");
    cy.server();
    cy.route('GET','/cart.json').as('load');
    cy.wait('@load');
    });
  
    it("Verify that [Log in] button is visible for user",()=>
    {
    cy.get('#customer_login_link').should('be.visible');
    });

    it("Click [Log in] button",()=>
    {
    cy.get('#customer_login_link').click();
    });

    it("Verify that the user was redirected to the login form ( check url )",()=>
    {
    cy.url().should('contain', 'account/login');
    });

    it("Can fill the form", () => 
    {
    cy.get('#customer_email').type("Test");
    cy.get('#customer_password').type("Test");
    });

    it("Verify that the [SIGN IN] button is visible", () => 
    {
    cy.get(':nth-child(9) > .btn').should('be.visible');
    });


    it("Clear inputs", () => 
    {
    cy.get('#customer_email').clear();
    cy.get('#customer_password').clear();
    });

    it("Test Form1", () => 
    {
    cy.get('#customer_password').type("dgfgddrg");
    cy.get(':nth-child(9) > .btn').click();
    cy.get('#customer_login > .note');
    cy.get('#customer_password').clear();
    });
    
    it("Test Form2", () => 
    {
    cy.get('#customer_email').type("test@gmail.com");
    cy.get('#customer_password').type("12345Qw4");
    cy.get(':nth-child(9) > .btn').click();
    cy.get('#customer_login > .note');
    cy.get('#customer_email').clear();
    cy.get('#customer_password').clear();
    });

    it("Test Form3", () => 
    {
    cy.get('#customer_email').type("test@gmail.com");
    cy.get(':nth-child(9) > .btn').click();
    cy.get('#customer_login > .note');
    cy.get('#customer_email').clear();
    });

    it("Test Form4", () => 
    {
    cy.get(':nth-child(9) > .btn').click();
    cy.get('#customer_login > .note');
    });

    it("Test Form5(Valid)", () =>
    {
    cy.clearCookies();
    cy.get('#customer_email').type("thomasshelbytest@gmail.com");
    cy.get('#customer_password').type("Qwerty11111@");
    cy.get(':nth-child(9) > .btn').click();
    });

    it("Verify that the user is logged in successfully", () => 
    {
    cy.url().should('contain', 'account');
    });

    it("Check if the user's name is “Thomas” at the top right of the window", () => 
    {
    cy.get('.site-header--meta-links').contains('Thomas');
    });

    it("Verify that [Log out] button is visible for user",()=>
    {
    cy.get('#customer_logout_link').should('be.visible');
    });

    it("Log out the account",()=>
    {
    cy.get('#customer_logout_link').click();
    });

    it("Verify that the user was redirected to the main page", () => 
    {
    cy.url().should('contain', '/');
    });
});