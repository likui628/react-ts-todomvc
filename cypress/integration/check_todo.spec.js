describe('check todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('does not show "Clear cmpleted" button on footer', () => {
    cy.get('.clear-completed').should('not.exist')
  })

  it('working check toggle each todo', () => {
    cy.get('.todo:first-of-type')
      .should('have.text', 'three')
      .find('.toggle')
      .check()
      .should('have.checked')

    cy.get('.clear-completed').should('be.visible')

    cy.get('.todo:nth-of-type(2)')
      .should('have.text', 'two')
      .find('.toggle')
      .check()
      .should('have.checked')

    cy.get('.clear-completed').should('be.visible')

    cy.get('.todo:last-of-type')
      .should('have.text', 'one')
      .find('.toggle')
      .check()
      .should('have.checked')

    cy.get('.clear-completed').should('be.visible')

    cy.get('.todo:first-of-type')
      .should('have.text', 'three')
      .find('.toggle')
      .click()
      .should('not.have.checked')
  })
})
