class NokiaLumiaPage {
    checkProductName(phoneName) {
        cy.contains('h2.name', phoneName)
    }

    clickAddToCartButton() {
        cy.contains('Add to cart').click()
        
    }
}

module.exports = new NokiaLumiaPage()