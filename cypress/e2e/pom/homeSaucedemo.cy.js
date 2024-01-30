
import homeSaucedemo from "../../pages/saucedemo/homeSaucedemo"
import inventorySaucedemo from "../../pages/saucedemo/inventorySaucedemo"

describe('POM Implementation', () =>{

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    it('should login to inventory page', () => {
        homeSaucedemo.typeUsername('standard_user');
        homeSaucedemo.typePassword('secret_sauce');
        homeSaucedemo.clickLogin();
    
        inventorySaucedemo.elements.titleSpan().should('have.text','Products');
    })  

    it('should display incorrect password mesagge', () => {
        homeSaucedemo.typeUsername('standard_user');
        homeSaucedemo.typePassword('fail');
        homeSaucedemo.clickLogin();
    
        homeSaucedemo.elements.mesaggeError().should('have.text',
        'Epic sadface: Username and password do not match any user in this service');
    })  
    
    it('should display incorrect username mesagge', () => {
        homeSaucedemo.typeUsername('fail');
        homeSaucedemo.typePassword('secret_sauce');
        homeSaucedemo.clickLogin();
    
        homeSaucedemo.elements.mesaggeError().should('have.text',
        'Epic sadface: Username and password do not match any user in this service');
    })  

});

