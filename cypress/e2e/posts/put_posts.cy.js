  describe('Test /posts/{id} endpoint', () => {  
    describe('Update a specific post', () => {
      it('verify the request returns with status code 200', () => {
        cy.request({
          method: 'PUT',
          url: '/posts/3',
          body: {
            title: 'Updated Post',
            userId: 3,
            body: 'Updated body',
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
          url: '/posts/3',
          body: {
            title: 'Updated Post',
            userId: 3,
            body: 'Updated body',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          expect(response.body).to.have.property('title', 'Updated Post');
          expect(response.body).to.have.property('userId', 3);
          expect(response.body).to.have.property('body', 'Updated body');
        });
      });
    });
  
    describe('Partial Update a specific post', () => {
      it('verify the request returns with status code 200', () => {
        cy.request({
          method: 'PATCH',
          url: '/posts/4',
          body: {
            title: 'Partial Updated Post',
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
          url: '/posts/4',
          body: {
            title: 'Partial Updated Post',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          expect(response.body).to.have.property('title', 'Partial Updated Post');
          expect(response.body).to.have.property(
            'body',
            'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
          );
          expect(response.body).to.have.property('userId', 1);
        });
      });
    });
  });
  