describe('Test /comments endpoint', () => {
  describe('GET all comments', () => {
    if (
      ('verify request returns JSON',
      () => {
        cy.request('/comments')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json');
      })
    );
    it('verify the request returns the correct status code', () => {
      cy.request('/comments').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns the correct lenght of the posts list', () => {
      cy.request('/comments').then((response) => {
        expect(response.body).to.have.length(500);
        expect(response.body).to.be.an('array').and.not.to.be.empty;
      });
    });
  });
});

describe('Test /comments/{id} endpoint', () => {
  describe('GET a specific comment', () => {
    it('verify the request returns with status code 200', () => {
      cy.request('/comments/2').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
    it('verify the request returns with the correct data in response body', () => {
      cy.request('/comments/2').then((response) => {
        expect(response.body).to.have.property('id', 2);
        expect(response.body).to.have.property(
          'name',
          'quo vero reiciendis velit similique earum'
        );
        expect(response.body).to.have.property('postId', 1);
        expect(response.body).to.have.property(
          'email',
          'Jayne_Kuhic@sydney.com'
        );
        console.log(response.status);
      });
    });
  });

  describe('GET a nonexisting comment', () => {
    it('verify the request returns with status code 404', () => {
      cy.request({
        url: '/comments/1000',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty;
      });
    });
  });
});
