import home_page from "../support/Page_Objects/home_page"
import laptopt_products_page from "../support/Page_Objects/laptops_products_page"
import dell_laptop_page from "../support/Page_Objects/dell_laptop_page"
import cart_page from "../support/Page_Objects/cart_page"
import place_order_module from "../support/Page_Objects/Modules/place_order_module"

describe('Laptop Order Process without sufficient data', () => {

  before(() => {
    cy.visit('')
  })
  it('Laptop order process', () => {
    home_page.laptopsCategory().click()
    laptopt_products_page.laptopList().should('be.visible')
    cy.fixture('laptops.json').then((laptop) => {
      laptopt_products_page.selectLaptopModel(laptop.Dell)
    })
    cy.fixture('laptops.json').then((laptop) => {
      dell_laptop_page.checkProductName(laptop.Dell)
    })
    dell_laptop_page .clickAddToCartButton()
    home_page.clickOnCartButton()
      cart_page.checkCartPageIsDisplayed()
      cy.fixture('laptops.json').then((laptop) => {
        cart_page.checkCartTableContainsSelectedProduct(laptop.Dell)
    })
    cart_page.clickOnPlaceOrderButton()
    // Here we insert insufficient data to trigger a warning!
    cy.fixture('clientData.json').then((data) => {
      place_order_module.completeFields('country', data.country)
      place_order_module.completeFields('city', data.city)
    })
    place_order_module.clickOnPurchaseButton()
    // Warning alert is triggered and we check the message!
    cy.on('window:alert', (a) => {
        expect(['Please fill out Name and Creditcard.', 'Product added']).to.contain(a)
    })
    cy.get('#orderModalLabel + button').click()
    cy.get('#nava').click()
})
})