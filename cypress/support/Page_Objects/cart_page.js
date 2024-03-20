class CartPage {
    
    checkCartPageIsDisplayed() {
        cy.url().should('eq', Cypress.config().baseUrl + '/cart.html')
    }

    checkCartTableContainsSelectedProduct(productName) {
        cy.contains('#tbodyid>tr>td', productName)
    }

    clickOnPlaceOrderButton() {
        cy.get('[data-target="#orderModal"]').click()
    }
}

module.exports = new CartPage()