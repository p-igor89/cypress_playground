/// <reference types="cypress" />

it('Using get with Find and Eq', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0);
})

it('Works with contains option', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in'); //return button with text 'Sign in'
})

it('Works with contains option and two params', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Sign in'); //return div with text 'Sign in'
})

it('Works with contains option and ignoring case', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase:false}); //return button, but ignore case
})