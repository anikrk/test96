describe('homework', () => {
  it('Register User', () => {
    cy.visit('https://www.automationexercise.com/');
    // Click on 'Signup / Login' button
    cy.get('.shop-menu>.nav>:nth-child(4) > a').click();
    //Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should("have.text", "New User Signup!")
    //Enter name and email address
    cy.get('[data-qa="signup-name"]').type("anikirk");
    cy.get('[data-qa="signup-email"]').type("akirkitadze96@gmail.com")
    //Click 'Signup' button
     cy.get('[data-qa="signup-button"]').click();
    // //Verify that 'ENTER ACCOUNT INFORMATION' is visible
     cy.get(':nth-child(1) > b').should("have.text", "Enter Account Information");
    // //Fill details: Title, Name, Email, Password, Date of birth
     cy.get('#id_gender2').check()
     cy.get('[data-qa="name"]').type("anikirk");
     cy.get('[data-qa="email"]').type("akirkitadze96@gmail.com");
     cy.get('[data-qa="password"]').type("a123");
     cy.get('[data-qa="days"]').select(11)
     cy.get('[data-qa="months"]').select("December")
     cy.get('[data-qa="years"]').select(1996)

    // //Select checkbox 'Sign up for our newsletter!'
     cy.get('#newsletter').check()
    // //Select checkbox 'Receive special offers from our partners!'
     cy.get('#optin').check()


    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
     cy.get('[data-qa="first_name"]').type("ani")
     cy.get('[data-qa="last_name"]').type("kirkitadze")
     cy.get('[data-qa="company"]').type("company")
     cy.get('[data-qa="address"]').type("tbilisi")
     cy.get('[data-qa="address2"]').type("tbilisi2")
     cy.get('[data-qa="country"]').select("Canada")
     cy.get('[data-qa="state"]').type("state")
     cy.get('[data-qa="city"]').type("city")
     cy.get('[data-qa="zipcode"]').type(123)
     cy.get('[data-qa="mobile_number"]').type(598872699)
    // //Click 'Create Account button'
     cy.get('#optin').click()
    //Verify that 'ACCOUNT CREATED!' is visible
     cy.get('b').should("have.text", "ACCOUNT CREATED")
    // Click 'Continue' button

    //Verify that 'Logged in as username' is visible
     cy.get(':nth-child(10) > a').should("have.text", "Logged in as anikirkanikirk")
    //Click 'Delete Account' button
     cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should("have.text, ACCOUNT DELETED")
    

  })
})