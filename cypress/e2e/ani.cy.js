const { should } = require("chai")

describe('template spec', () => {
  it('register user', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("have.text", "New User Signup!");
  })
})