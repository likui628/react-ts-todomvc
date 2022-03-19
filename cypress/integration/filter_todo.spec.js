describe('filter todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
    cy.get('.todo:first-of-type').find('.toggle').click()
  })

  it('show all todos', () => {
    cy.get('.filters').find('[href="/"]').click()
    cy.get('.todo').should('have.length', 3)
  })

  it('show un-completed todos', () => {
    cy.get('.filters').find('[href="/active"]').click()
    cy.get('.todo').should('have.length', 2)

    cy.get('.todo:first-of-type').find('.toggle').click()
    cy.get('.todo').should('have.length', 1)

    cy.get('.new-todo').type('newItem{enter}')
    cy.get('.todo').should('have.length', 2)
  })

  it('show completed todos', () => {
    cy.get('.filters').find('[href="/completed"]').click()
    cy.get('.todo').should('have.length', 1)

    cy.get('.new-todo').type('newItem{enter}')
    cy.get('.todo').should('have.length', 1)
  })
})
