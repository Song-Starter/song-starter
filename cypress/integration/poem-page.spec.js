context('Poem page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('Poem page', () => {
    it('should display the full poem when user clicks "see full poem"', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class=Lyrics]').find('a').contains('see full poem').click()
      cy.get('div[class=poem-display]').find('p').should('exist')
      cy.get('div[class=Lyrics]').find('a').contains('Back to Song').click()
    })
  })
})