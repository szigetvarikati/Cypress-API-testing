describe('Test /comments/{id} endpoint', () => {
  describe('Update a specific comment', () => {
    it('verify the request returns with status code 200', () => {
      cy.request({
        method: 'PUT',
        url: '/comments/10',
        body: {
          name: 'Updated comment name',
          body: 'Updated body',
          email: 'Updated email',
          postid: 10,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns with the updated data in response body', () => {
      cy.request({
        method: 'PUT',
        url: '/comments/10',
        body: {
          name: 'Updated comment name',
          body: 'Updated body',
          email: 'Updated email',
          postid: 10,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.body).to.have.property('body', 'Updated body');
        expect(response.body).to.have.property('name', 'Updated comment name');
        expect(response.body).to.have.property('email', 'Updated email');
      });
    });
  });

  describe('Partial Update a specific comment', () => {
    it('verify the request returns with status code 200', () => {
      cy.request({
        method: 'PATCH',
        url: '/comments/4',
        body: {
          name: 'Partial Updated Comment',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns with the updated data in response body', () => {
      cy.request({
        method: 'PATCH',
        url: '/comments/4',
        body: {
          name: 'Partial Updated Comment',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.body).to.have.property(
          'name',
          'Partial Updated Comment'
        );
        expect(response.body).to.have.property('postId', 1);
        expect(response.body).to.have.property('email', 'Lew@alysha.tv');
        expect(response.body).to.have.property(
          'body',
          'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
        );
      });
    });
  });
});
