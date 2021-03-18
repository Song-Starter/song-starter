context('Saved Songs', () => {
  beforeEach(() => {
    cy.intercept('poetrydb.org/random/1/title,lines,author', { fixture: 'response.json' }
    )
    cy.visit('http://localhost:3000/')
  })

  describe('Header', () => {
    it('should add a song to "Saved Songs" when "Save Song" is clicked', () => {
      cy.get('div[class=Header]')
        .find('div[class=NavBar]')
      cy.get('button[class=new-song-button]').click()
      cy.wait(300)
      cy.get('button[class=save-song]').click()
    })
  })
  it('should display saved songs on separate page', () => {
      cy.get('div[class=Header]')
        .find('div[class=NavBar]')
      cy.get('button[class=new-song-button]').click()
      cy.wait(300)
      cy.get('button[class=save-song]').click()
      cy.get('button[class=new-song-button]').click()
      cy.wait(300)
      cy.get('button[class=save-song]').click()
      cy.get('a').contains('Saved').click()
      cy.get('div[class=SavedSong]').should('have.length', 2)
    })
    it.only('should allow a user to view a saved song on the main display', () => {
      cy.get('button[class=new-song-button]').click()
      cy.wait(300)
      cy.get('button[class=save-song]').click()
      cy.get('a').contains('Saved').click()
      cy.get('div[class=SavedSong]').find('button[class="showsong-button"]').click()
      cy.get('div[class=Song]').find('div[class=Lyrics]').contains('see full poem')
    })
  })