/// <reference types="Cypress" />

it('assertion should', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .clear()
    .type(100)
    .should('have.value', '100')
    .and('be.visible')
})

it('assertion expect', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .clear()
    .type(100).then(input => {
        expect(input).to.have.value('100')
    })
})

it('check statement for element by default', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
    .should('be.checked')
})

it('check is visible archive link', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('My deposits')
    .trigger('mouseover')
    .get('#archiveDeposits')
    .should('be.visible')
})

it('check is correct attr in button', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
    .should('have.attr', 'type')
    .and('match', /button/)
})

it('check is correct URL', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.url()
    .should('eq','https://next.privat24.ua/?lang=en')
})