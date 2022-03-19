describe('edit todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('can edit todo text', () => {
    cy.get('.todo:nth-of-type(3)')
      .find('label')
      .dblclick()
      .should('not.visible')

    cy.get('.todo:nth-of-type(3)')
      .find('[data-testid=todo-edit-input]')
      .type('111{enter}')

    cy.get('.todo:nth-of-type(3)').should('have.text', 'one111')
  })

  it('can edit completed todo text', () => {
    cy.get('.todo:nth-of-type(1)')
      .should('have.text', 'three')
      .find('.toggle')
      .check()

    cy.get('.todo:nth-of-type(1)')
      .find('label')
      .dblclick()
      .should('not.visible')

    cy.get('.todo:nth-of-type(1)')
      .find('[data-testid=todo-edit-input]')
      .type('111{enter}')

    cy.get('.todo:nth-of-type(1)').should('have.text', 'three111')
  })
})
