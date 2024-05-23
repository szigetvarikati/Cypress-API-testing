<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align="center">API testing with Cypress</h1>

  <p align="center">
  This project contains automated tests for verifying the functionality of a RESTful API using Cypress.
    <br />
    <br />
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
     <a>About The Project</a>
      <ul>
        <li><a>Built With</a></li>
      </ul>
    </li>
    <li>
      <a>Getting Started</a>
      <ul>
        <li><a>Installation</a></li>
      </ul>
      <ul>
        <li><a>Usage</a></li>
      </ul>
    </li>
    <li><a>Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project automates testing for a RESTful API using Cypress. It ensures the API's reliability by verifying various endpoints, including checking for correct status codes and confirming data integrity after CRUD operations (Create, Read, Update, Delete).

<p align="center">
  <img src="https://imgur.com/QyUdtqi.jpg" alt="tests for Comments" width=700px>
  <img src="https://imgur.com/cYf58SN.jpg" alt="tests for Posts" width=700px>
   <img src="https://imgur.com/H3oYOx0.jpg" alt="result of tests" width=700px>
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With <a name="built-with"></a>

[![Cypress][Cypress]][Cypress-url] <br>
A powerful end-to-end testing framework for web applications, providing a rich set of features for writing and running tests. <p>
[![Javascript][Javascript.js]][Javascript-url] <br>
JavaScript is a high-level, versatile programming language. <p>
[![Node.js][Node.js]][Node.js-url] <br>
A JavaScript runtime environment used to execute Cypress tests and manage project dependencies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started <a name="about-the-project"></a>

Follow the guide below to install and run the application.

### Installation

1. Requirements: Make sure Node.js is installed on your computer.
2. Clone the repository
   ```sh
   git clone https://github.com/szigetvarikati/Cypress-API-testing.git
   ```
3. Navigate to the folder
   ```sh
   cd Cypress-API-testing
   ```
4. Open the project
5. Install dependencies
   ```sh
   npm install
   ```

### Usage

1. Start the Cypress tests with the following command:
   ```sh
   npx cypress open
   ```
2. Run tests in the Cypress applicaion that opens, select E2E Testing, then select a browser (for example: Chrome ) then select the spec.cy.ts file and click to run the tests.
3. Or run tests from terminal with the following command:
   ```sh
   npy cypress run
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Katalin Szigetvári - szigetvarikati@gmail.com

Project Link: https://github.com/szigetvarikati/Cypress-API-testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/katalin-szigetvári-9829519a
[product-main]: https://imgur.com/a/jEvI3mU
[Javascript.js]: https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/javascript
[Node.js]: https://img.shields.io/badge/node.js-F7DF1E?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Cypress]: https://img.shields.io/badge/cypress-20232A?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://www.cypress.io
