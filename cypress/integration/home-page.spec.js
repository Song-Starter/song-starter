context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('Header', () => {
    it('should display the application name', () => {
      cy.get('div[class=Header]')
        .find('h1')
        .should('have.class', 'title')
      })
    it('should display the navigation bar', () => {
      cy.get('div[class=Header]')
        .find('div[class=NavBar]')
        .find('label')
        .contains('Key')
    })
  })

  describe('Main display', () => {
    it('should NOT display a song on page load', () => {
      cy.get('div[class=Song]')
      .find('h1')
      .contains('Let\'s get started!')
    })
  })
})
