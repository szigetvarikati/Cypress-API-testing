describe('posts API', () => {
  it('verify request returns JSON', () => {
    cy.request('/posts')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('verify the request returns the correct status code', () => {
    cy.request('/posts').its('status').should('be.equal', 200);
  });

  it('verify the request returns 20 items', () => {
    cy.request('/posts').its('body').should('have.length', 20);
  });
});
