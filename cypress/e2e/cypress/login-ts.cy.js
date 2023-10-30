import 'cypress-xpath';
const URL = 'https://www.saucedemo.com/'
describe('Login', () => { 

    it('Test LOGIN', () => {
        cy.viewport(1200, 800);
        cy.visit('https://www.saucedemo.com/')
        cy.get('a[href="/favicon.ico"]').click();
        cy.get('input[placeholder="Username"]').type('standard_user');
        cy.get('input[placeholder="Password"]').type('secret_sauce');
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/account"] svg').click();
        cy.contains('standard_user').should('exist');
    
    });

 })