context('User Lyrics', () => {
  beforeEach(() => {
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


  })
})