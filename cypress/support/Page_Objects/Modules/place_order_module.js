class PlaceOrder {

    completeFields(value1, value2) {
        cy.get(`#${value1}`).type(value2)
    }

    clickOnPurchaseButton() {
        cy.get('button[onclick="purchaseOrder()"]').click()
    }
    
    checkConfirmationMessage() {
        cy.get('.sweet-alert>h2').contains('Thank you for your purchase!') 
    }

    closeOrderModule() {
        cy.get('.confirm').click()
        cy.get('#orderModalLabel + button').click()
        cy.get('#nava').click()
    }  
}

module.exports = new PlaceOrder()