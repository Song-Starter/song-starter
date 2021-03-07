context('Error page', () => {
  describe('Error', () => {
    it('should display if URL does not exist', () => {
      cy.visit('http://localhost:3000/notarealurl')
      cy.get('div[class=Error]')
        .find('h1')
        .should('have.class', 'error-title')
        cy.visit('http://localhost:3000/123456789')
      cy.get('div[class=Error]')
        .find('h1')
        .should('have.class', 'error-title')
    })
    it.only('should display if poem is not returned does not exist', () => {
      cy.visit('http://localhost:3000/')
      cy.intercept(
        {
          method: 'GET',
          url: 'poetrydb.org/random', 
        },
        [{ fixture: 'error.json' }]
      )
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class=Error]')
        .find('h1')
        .should('have.class', 'error-title')
    })
  })

})