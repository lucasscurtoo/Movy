/* eslint-disable no-undef */
describe('movie-page', () =>{
    beforeEach(() => {
        cy.visit('/')
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
})
describe('home test', () => {
    beforeEach(() =>{
        cy.visit('/home')
    })
    it('counting the movie array length', () => {
        cy.get('.carousel').first().children().should('have.length', 20)
       
    })
})
