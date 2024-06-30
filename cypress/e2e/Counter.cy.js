describe('Counter process', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Should display first render counter', () => {
    cy.contains('counter: 0').should('be.visible')
  })

  it('Should increase counter in 1', () => {
    cy.get('[data-cy="btn-increase"]').click()
    cy.contains('counter: 1').should('be.visible')
  })

  it('Should decrease counter in -2', () => {
    cy.get('[data-cy="btn-decrease"]').click()
    cy.get('[data-cy="btn-decrease"]').click()
    cy.contains('counter: -2').should('be.visible')
  })
})
