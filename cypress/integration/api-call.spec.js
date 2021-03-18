context('API call', () => {
  beforeEach(() => {
    cy.intercept('poetrydb.org/random/1/title,lines,author', { fixture: 'response.json' }
    )
    cy.intercept(
      {method: 'GET',
        url: 'http://localhost:3000/static/media/pianosprite.151ac733.mp3', 
      },
      [{ fixture: 'response.json' }]
    )
    cy.visit('http://localhost:3000/')
  })

  describe('API call', () => {
    it('should return a random poem from "PoetryDB"', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class=lyrics-display]').find('p').should('have.length', 4)
    })
  })
})