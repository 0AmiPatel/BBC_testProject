import Login from "../PageObject/LoginPage.js"

    describe('Calculator Verification ', () => {
       
            it('HomepageTests', () => {
                cy.visit('https://www.calculator.net/')

                const ln = new Login()
                ln.chkLogoVisibility();
                ln.chkCalcVisibility();
                ln.AllCaculatorBtnClick();
              })
      
                 
    
      })



   