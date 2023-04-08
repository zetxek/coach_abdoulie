describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('Coach Abdoulie')
  })

  it('navigates to the product page', () => {
    cy.get('a[href="/products"]').eq(0).click();
    cy.url().should("include", "/products")
    cy.get('h1').contains(/Latest sontent/i)
  })


  it('navigates to the blog page', () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post")
    cy.get('h1').contains(/Latest Posts/i)
  })
})

describe('validate blog', () => {
  it('should have at least 1 blog posts by default', () => {
    cy.visit('/post')
    cy.get('ul#blog-list li').should('have.length.of.at.least', 1);
  })
})