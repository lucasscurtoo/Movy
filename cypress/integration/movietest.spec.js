/* eslint-disable no-undef */
<<<<<<< HEAD
describe('movie-page', () =>{
    beforeEach(() => {
        cy.visit('/')
=======

// movie.spec.js created with Cypress
//d
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('movie-page', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
>>>>>>> 861cfed (adding cypress test to movy page)
    })

    it('scroll to price section and click it', () => {

        cy.get('.Home-prices').click();
    })
    it('scroll to cancel section and click it', () => {
        cy.get('.Home-cancel').click();
    })
    it('pass to the home useer page', () => {
        cy.get('#try-now').click();
        const newUser = "lucas@gmail.com"
        const userPass = "12345"
        cy.get('input').first().type(`${newUser}{enter}`)
        cy.get('input').eq(1).type(`${userPass}{enter}`)
        cy.get('form #Log-in').click();

    })
<<<<<<< HEAD
})
describe('home test', () => {
    beforeEach(() =>{
        cy.visit('/home')
    })
    it('counting the movie array length', () => {
        cy.get('.carousel').first().children().should('have.length', 20)
       
    })
})
=======
    it('making scroll to the carousel movies', () => {
        cy.visit('http://localhost:3000/home')
        cy.get('.carousel').first().children().should('have.length', 20)
       
    })
})
>>>>>>> 861cfed (adding cypress test to movy page)
