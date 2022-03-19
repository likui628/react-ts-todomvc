describe('not found page', () => {
  it('should show not found', () => {
    cy.visit('http://localhost:3000/itshouldnotexist')

    cy.get('div').should('exist').should('contain', 'Page Not Found')
  })
})
