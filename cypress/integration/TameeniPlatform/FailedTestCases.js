
import LandingPage from '../../page-objects/LandingPage.js' 
import LogingPage from '../../page-objects/LoginPopup.js'


describe('Check Failed Test cases ', function()  
{


    const Landing = new LandingPage();
    const Login = new LogingPage();

    
    it('OPEN Tameeni PLATFORME', function()

    {
        
        Landing.navigate('')
        Landing.Assertion()
        
    })

    it('Check system when Click Registration Card', function()

    {
        
        Landing. ClickRegistrationCard()
        Landing.ChecksequenceNumber()
        
    })



   
})


