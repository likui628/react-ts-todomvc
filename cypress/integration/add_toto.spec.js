describe('add todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'

    cy.get('.new-todo').type(`${newItem}{enter}`)

    cy.get('[data-testid=todo-body-text]')
      .should('have.length', 1)
      .should('have.text', newItem)
  })
})
