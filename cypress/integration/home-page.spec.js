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
    it('should NOT display a song on page load', () => {
      cy.get('div[class=Song]')
      .find('p')
      .contains('Choose "Major" or "Minor".')
    })
  })

  describe('Header while building a song', () => {
    it('should allow users to select a key', () => {
      cy.get('select[id=key]')
      .select('D')
      .should('have.value', 'D')
    })
    it('should allow users to choose a quality', () => {
      cy.get('div[class=qual-container]')
      .find('input')
      .should('have.attr', 'id')
      cy.get('div[class=qual-container]')
      .find('label')
      .contains('Minor')
      .click()
    })
    it('should display a new song when "New Song" is clicked', () => {
      cy.get('div[class=Header]')
        .find('div[class=NavBar]')
      cy.get('button[class=new-song-button]').click()
    })
    it('should display a new song when "New Song" is clicked', () => {
      cy.get('div[class=Header]')
        .find('div[class=NavBar]')
      cy.get('button[class=new-song-button]').click()
    })
  })

  describe('Song display', () => {
    it('should display a song after "New Song" is clicked', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class="Song"]').find('div[class="Lyrics"]').contains('see full poem')
    })

    it('should display lyrics with no more than four lines of poety', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class="lyrics-display"]').find('p').should('have.length', 4)
    })

    it('should display chords', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class="Progression"]')
      cy.get('div[class=Chord]').contains('notes')
    })

    it.only('should play the chord when it is clicked', () => {
      cy.get('button[class=new-song-button]').click()
      cy.get('div[class="Progression"]')
      cy.get('div[class=Chord]').contains('C').click()
      cy.window().should('have.attr', 'Sound')
      cy.window('Howl').trigger('init')
    })
  })
})
