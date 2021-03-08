context('API call', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('API call', () => {
    it('should return a random poem from "PoetryDB"', () => {
      cy.get('button[class=new-song-button]').click()
      cy.intercept(
        {method: 'GET',
          url: 'poetrydb.org/random', 
        },
        [{ fixture: 'response.json' }]
      )
      cy.get('div[class=lyrics-display]').find('p').should('have.length', 4)
    })
  })
})