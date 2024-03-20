import home_page from "../support/Page_Objects/home_page"
import phone_products_page from "../support/Page_Objects/phone_products_page"
import nokia_lumia_page from "../support/Page_Objects/nokia_lumia_page"
import cart_page from "../support/Page_Objects/cart_page"
import place_order_module from "../support/Page_Objects/Modules/place_order_module"

describe('Phone Order Process Validation Test', () => {

  before(() => {
    cy.visit('')
  })
  it('Phone order process', () => {
    home_page.phoneCategory().click()
    phone_products_page.phonesList().should('be.visible')
    cy.fixture('phones.json').then((phones) => {
      phone_products_page.selectPhoneModel(phones.nokia)
    })
    cy.fixture('phones.json').then((phones) => {
      nokia_lumia_page.checkProductName(phones.nokia)
    })
    nokia_lumia_page.clickAddToCartButton()
    cy.on('window:alert', (a) => {
          expect(a).to.contain('Product added')
      })
    home_page.clickOnCartButton()
      cart_page.checkCartPageIsDisplayed()
      cy.fixture('phones.json').then((phones) => {
        cart_page.checkCartTableContainsSelectedProduct(phones.nokia)
    })
    cart_page.clickOnPlaceOrderButton()
    cy.fixture('clientData.json').then((data) => {
      place_order_module.completeFields('name', data.name)
      place_order_module.completeFields('country', data.country)
      place_order_module.completeFields('city', data.city)
      place_order_module.completeFields('card', data.card)
      place_order_module.completeFields('month', data.month)
      place_order_module.completeFields('year', data.year)
    })
    place_order_module.clickOnPurchaseButton()
    place_order_module.checkConfirmationMessage()
    place_order_module.closeOrderModule()
  })
})