const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SUBMIT_BTN = '[type=submit]'; 
const ERROR_MESSAGE = '.alert-error'; 

export default class LoginPage {

    static visitLoginPage() {
        return cy.visit(URL);
    }

    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username);
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password);
    }

    static submit() {
        cy.get(SUBMIT_BTN).click();
    }

    static shouldErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong');
    }
} 