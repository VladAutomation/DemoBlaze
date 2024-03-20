class HomePage {
    phoneCategory() {
        return cy.contains('Phones')
    }

    laptopsCategory() {
        return cy.contains('Laptops')
    }

    monitorsCategory() {
        return cy.contains('Monitors')
    }

    clickOnCartButton() {
        cy.get('#cartur').click()
    }
}
module.exports = new HomePage()