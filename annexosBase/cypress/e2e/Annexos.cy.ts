describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/annexos')
    cy.get('.drawer-link-content').eq(1).should('be.visible').click()
    
  })

  it('falla', () => {
    cy.visit('http://localhost:5173/annexos')
    cy.get('.falla')
  })
})