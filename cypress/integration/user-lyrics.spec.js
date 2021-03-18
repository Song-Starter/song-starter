context('User Lyrics', () => {
  beforeEach(() => {
    cy.intercept('poetrydb.org/random/1/title,lines,author', { fixture: 'response.json' }
    )
    cy.visit('http://localhost:3000/')
    cy.get('button[class=new-song-button]').click()
      .wait(300)
    cy.get('a[class=user-lyrics-button]').click()

  })

  describe('User Lyrics', () => {
    it('should display input for user lyric title', () => {
      cy.get('input[id=user-title]').should('exist')
    })

    it('should display textarea for user lyrics', () => {
      cy.get('textarea').should('exist')
    })

    it('should be able to add text to input for user lyric title', () => {
      cy.get('input[id=user-title]').type('Cool Song Title')
      cy.get('input[id=user-title]').should('have.value', 'Cool Song Title')
    })

    it('should be able to add text to textarea for user lyrics', () => {
      cy.get('textarea').type('yeah yeah yeah{enter}thats right{enter}yeah yeah yeah{enter}this is song{enter}oh yeah oh yeah')
      cy.get('textarea').should('have.value', 'yeah yeah yeah\nthats right\nyeah yeah yeah\nthis is song\noh yeah oh yeah')
    })

    it('should be able to add new lyrics to song', () => {
      cy.get('input[id=user-title]').type('Cool Song Title')
      cy.get('textarea').type('when I was little{enter}i dreamt of being an astronaut{enter}now I dream of{enter}having a home{enter}and a mortgage')
      cy.get('button[class=save-new-lyrics]').click()
    })

    it('should display new lyrics and title when user saves their lyrics', () => {
      cy.get('input[id=user-title]').type('Super Sad')
      cy.get('textarea').type('i am a sad boi{enter}this is a sad song{enter}you are a sad boi{enter}the world is a sad place{enter}thank god for  tacos')
      cy.get('button[class=save-new-lyrics]').click()
      cy.get('div[class=lyrics-display]').find('p').should('have.length', 4)
      cy.get('a[class=full-poem-link]').click()
      cy.get('div[class=poem-display]').find('p').should('have.length', 5)
    })
  })
})