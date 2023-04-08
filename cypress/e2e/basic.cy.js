describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('Coach Abdoulie')
  })

  it('navigates to the product page', () => {
    cy.visit('/products');
    cy.url().should("include", "/products")
    cy.get('h1').contains(/Latest content/i)
  })


  it('navigates to the blog page', () => {
    cy.visit('/post');
    cy.url().should("include", "/post")
    cy.get('h1').contains(/Last posts/i)
  })
})

describe('validate blog', () => {
  it('should have at least 1 blog posts by default', () => {
    cy.visit('/post')
    cy.get('ul#blog-list li').should('have.length.of.at.least', 1);
  })
})