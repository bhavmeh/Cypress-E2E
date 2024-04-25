export class registerPage{
    weblocator={

        firstName:'#input-firstname',
        lastName: '#input-lastname',
        email:'input[type="email"]',
        telephone: 'input[name="telephone"]',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){
    cy.get(this.weblocator.firstName).type(FName);
    }

    enterLastName(LName){
        cy.get(this.weblocator.lastName).type(LName);
    }

    enterEmail(Email){
        cy.get(this.weblocator.email).type(Email);
    }

    enterTelephone(Tphone){
        cy.get(this.weblocator.telephone).type(Tphone);
    }

    enterPassword(Password){
        cy.get(this.weblocator.password).type(Password);
        cy.get(this.weblocator.passwordConfirm).type(Password);
    }

    selectCheckbox(){
        cy.get(this.weblocator.policyCheckbox).check();
    } 

    clickonContinue(){
        cy.get(this.weblocator.continue).click();
    } 
}