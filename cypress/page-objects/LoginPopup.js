export default class LoginPage {


    Assertion()
    {
        return  cy.get('[class="text-center font-bold text-2xl text-black mb-8"]')
        .should("contain.text","تسجيل دخول");
        
    }

       
}