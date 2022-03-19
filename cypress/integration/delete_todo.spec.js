describe('check todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('can delete mouse-hovering todo by push [x] button', () => {
    cy.get('.todo:nth-of-type(2)').find('.destroy').invoke('show').click()

    cy.get('.todo').should('have.length', 2)
  })
})
