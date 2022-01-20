export default class LandingPage {

    navigate(value)
    {
        return cy.visit(value);
       
    }

 
    Assertion()
    {
        return  cy.get('[class="font-bold text-center pt-6 text-2xl md:text-5xl text-dark"]')
        .should("contain.text"," الموقع الأول لمقارنة أسعار التأمين في المملكة ")
    }


    ClickLoginToMyAccount()
    {
        return  cy.get('[class="text-sm block font-bold"]').contains("الدخول لحسابي")
        .click()
    }
    
    ClickRegistrationCard()
    {
        return  cy.get('[class="text-grey font-bold px-3 py-1 text-sm uppercase"]')
        .contains(" البطاقة الجمركية ")
        .click()
    }

    ChecksequenceNumber()
    {
        return  cy.get('[formcontrolname="sequenceNumber"]')
        .should('be.visible') 
    }




    
}