class DellPage {
    checkProductName(laptopName) {
        cy.contains('h2.name', laptopName)
    }

    clickAddToCartButton() {
        cy.contains('Add to cart').click()
        
    }
}

module.exports = new DellPage()