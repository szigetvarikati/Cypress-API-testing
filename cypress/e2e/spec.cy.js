//import { createSnapshot, restoreSnapshot } from '../fixtures/snapshot';

//createSnapshot();

describe('posts APIs', () => {
  beforeEach(() => {
    // restoreSnapshot();
  });
});

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
        method: 'PUT',
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
