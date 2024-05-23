describe('Test /posts endpoint', () => {
  describe('GET all posts', () => {
    it('verify request returns JSON', () => {
      cy.request('/posts')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });
    it('verify the request returns the correct status code', () => {
      cy.request('/posts').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns the correct lenght of the posts list', () => {
      cy.request('/posts').then((response) => {
        expect(response.body).to.have.length(100);
        expect(response.body).to.be.an('array').and.not.to.be.empty;
      });
    });
  });
});

describe('Test /posts/{id} endpoint', () => {
  describe('GET a specific post', () => {
    it('verify the request returns with status code 200', () => {
      cy.request('/posts/2').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns with the correct data in response body', () => {
      cy.request('/posts/2').then((response) => {
        expect(response.body).to.have.property('id', 2);
        expect(response.body).to.have.property('title', 'qui est esse');
        expect(response.body).to.have.property(
          'body',
          'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        );
        expect(response.body).to.have.property('userId', 1);
        console.log(response.status);
      });
    });
  });

  describe('GET a nonexisting post', () => {
    it('verify the request returns with status code 404', () => {
      cy.request({
        url: '/posts/1000',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty;
      });
    });
  });

  
});
