
import LandingPage from '../../page-objects/LandingPage.js' 
import LogingPage from '../../page-objects/LoginPopup.js'


describe('AS USER CHECK PASSED Test cases', function()  
{

    // afterEach(() => {
    //     cy.saveLocalStorage();
        
    //   });
 
    // beforeEach(() => {
    //     cy.restoreLocalStorage();
        
    //   });
    

    const Landing = new LandingPage();
    const Login = new LogingPage();

    
    it('OPEN Tameeni PLATFORME', function()

    {
        
        Landing.navigate('')
        Landing.Assertion()
        
    })


    it('click login on Tameeni PLATFORME', function()

    {
        
        Landing.ClickLoginToMyAccount()
        Login.Assertion()
        
        
    })

   
})


