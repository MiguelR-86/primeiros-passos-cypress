import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {


const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '[type="submit"]',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert-content'
}

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
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