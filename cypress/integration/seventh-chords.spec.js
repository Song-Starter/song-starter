context('Seventh chords', () => {
  beforeEach(() => {
    cy.intercept('poetrydb.org/random/1/title,lines,author', { fixture: 'response.json' }
    )
    cy.visit('http://localhost:3000/')
  })

  describe('Chords', () => {
    it('should default to return triads', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class=chord-notes]').find('p').should('have.length', 12)
    })
    it('should allow users to select seventh chords', () => {
      cy.get('div[class=seventh]').find('label').contains('yes').click()
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class=chord-notes]').find('p').should('have.length', 16)
    })
  })
})