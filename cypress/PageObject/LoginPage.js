class Login{
//verification of Logo 
chkLogoVisibility(){
    cy.get('#logo').should('be.visible')
}
//check Calculator is displayed 
chkCalcVisibility(){
    cy.get('#sciout').should('be.visible')
}
//clicking All calculator button should redirect correctly 
AllCaculatorBtnClick(){
    cy.get('[style="text-align:center;padding-top:30px;"] > a > img').click()
    cy.get('h1').should('contain', 'Sitemap')
}

}
export default Login