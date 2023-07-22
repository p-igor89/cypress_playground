/// <reference types="Cypress" />


it('type', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="phone-number"]')
    .type('0985486511')
})

it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .focus()
})

it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .focus()
    .blur()
})

it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .clear()
    .type(999)
    .clear()
})

it('submit', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .submit()
})

it('click', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-value="manual"]')
    .click()
})

it('uncheck', () => {
    cy.visit('https://en.privatbank.ua/')
    cy.get('#switch-input')
    .check({force: true})
    .wait(2000)
    .uncheck({force: true})
})

it('select', () => {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
    .get('#month')
    .select('10')
    .get('#day')
    .select('15')
    .get('#year')
    .select('1990')
})

it('scrollIntoView', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="lang"]')
    .scrollIntoView()
})

it.only('mouseover', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
    .contains('Services')
    .wait(2000)
    .trigger('mouseover')
})
