describe('Test /posts/{id} endpoint', () => {
  describe('DELETE a specific post', () => {
    it('verify the request returns with the correct satus code', () => {
      cy.request({
        method: 'DELETE',
        url: '/posts/5',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the deleted data is not exist', () => {
      cy.request({
        method: 'DELETE',
        url: '/posts/5',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
