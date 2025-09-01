import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {


const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '[type="submit"]',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert-content',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  middleNameField:'[name="middleName"]',
  lastNameField: '[name="lastName"]',
  genericField: '.oxd-input--active',
  licenseExpiryDate: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']"
}

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("TestFirst")
    cy.get(selectorsList.middleNameField).clear().type('TestMiddle')
    cy.get(selectorsList.lastNameField).clear().type('TestLastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type("test Other Id ")
    cy.get(selectorsList.genericField).eq(5).clear().type("test Driver's License")
    cy.get(selectorsList.licenseExpiryDate).eq(0).clear().type("2025-01-09")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')//o inicio da Url ficou dentro do cypress.config.js
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()  
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
//quando utiliza it.skip('Login - Success', () => o .skip faz pular aquele teste na automação