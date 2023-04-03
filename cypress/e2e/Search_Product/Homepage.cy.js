const { contains } = require("cypress/types/jquery");

describe('Search the  Product', () => {
    before(function () {
        //runs before all tests in the block
        cy.visit('https://www.bbc.co.uk')
        cy.wait(1000);
        cy.get('.ssrcss-bcdah5-ConsentButton').click()

        cy.fixture('example').then(function (data) {
            this.data1 = data
        })

    })


    it('Search', () => {
        cy.get('.ssrcss-13qfcv5-NavigationLink-SearchLink').click()
        cy.get('[data-testid="test-search-input"]').type("putin")
        cy.get('[data-testid="test-search-submit"]').click()
        cy.wait(1000);
        cy.url().should('include', 'putin')
        cy.get('.ssrcss-1020bd1-Stack').find('.ssrcss-53phst-Promo.ett16tt0')
            .should('have.length', 10)

        cy.get('ul>li').find('.ssrcss-53phst-Promo.ett16tt0').each
            (($el, index, $list) => {
                const txtproduct = $el.find('p.ssrcss-6arcww-PromoHeadline.e1f5wbog5').should


                (contains.text,'putin')
               // text()
                
                //prints in testrunner
                cy.log(txtproduct)

                if (txtproduct.includes('putin')) {
                    cy.log("text is" + txtproduct)
                }
            })
    })
})