describe('Test /comments endpoint', () => {
  describe('POST (create) a new comment', () => {
    it('verify the request returns with status code 201', () => {
      cy.request({
        method: 'POST',
        url: '/comments',
        body: {
          name: 'New Comment',
          email: 'xxx@xxx.com',
          body: 'it is a new comment for testing',
          postId: '1',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
    it('verify the response body contains the correct data', () => {
      cy.request({
        method: 'POST',
        url: '/comments',
        body: {
          name: 'New Comment',
          email: 'xxx@xxx.com',
          body: 'it is a new comment for testing',
          postId: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('body');
        expect(response.body).to.have.property(
          'body',
          'it is a new comment for testing'
        );
        expect(response.body).to.have.property('name', 'New Comment');
        expect(response.body).to.have.property('postId');
        expect(response.body).to.have.property('postId', 1);
      });
    });
  });
});
