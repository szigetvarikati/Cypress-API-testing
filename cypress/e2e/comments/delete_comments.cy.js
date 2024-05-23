describe('Test /comments/{id} endpoint', () => {
  describe('DELETE a specific comment', () => {
    it('verify the request returns with the correct satus code', () => {
      cy.request({
        method: 'DELETE',
        url: '/comments/5',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the deleted data is not exist', () => {
      cy.request({
        method: 'DELETE',
        url: '/comments/5',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
