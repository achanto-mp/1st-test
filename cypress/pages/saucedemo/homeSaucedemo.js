class homeSaucedemo{
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        mesaggeError: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(user){
        this.elements.usernameInput().type(user);
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
    }
    clickLogin(){
        this.elements.loginBtn().click();
    }
}

module.exports = new homeSaucedemo();