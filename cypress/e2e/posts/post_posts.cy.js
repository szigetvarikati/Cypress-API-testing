describe('Test /posts endpoint', () => {
  describe('POST (create) a new post', () => {
    it('verify the request returns with status code 201', () => {
      cy.request({
        method: 'POST',
        url: '/posts',
        body: {
          title: 'New Post',
          body: 'post body',
          userId: 1,
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
        url: '/posts',
        body: {
          title: 'New Post',
          body: 'post body',
          userId: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('title', 'New Post');
        expect(response.body).to.have.property('body', 'post body');
        expect(response.body).to.have.property('userId', 1);
      });
    });
  });
});

 
