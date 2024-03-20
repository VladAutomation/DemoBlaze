class LaptopProducts {
    laptopList() {
        return cy.get('#tbodyid')
    }

    selectLaptopModel(model) {
        cy.get('.card-title>a').contains(model).click()
    }
}

module.exports = new LaptopProducts()
