class PhoneProducts {

    phonesList() {
        return cy.get('#tbodyid')
    }

    selectPhoneModel(model) {
        cy.get('.card-title>a').contains(model).click()
    }
}

module.exports = new PhoneProducts()