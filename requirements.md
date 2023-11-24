# Usage

This project was built using <code>npm v10.2.4</code> and <code>node v21.2.0</code>.

The repo has a **package.json** file to handle dependencies and modules. Setting up the project should be straight-forward, install all dependencies and run cypress:

## 1. Install dependencies (depends on npm, of course)

~~~
npm install 
~~~

+ Cypress 13.6.0 should be installed in this step, if not already found.

## 2. Run the test suites

~~~
npm run test
~~~

The custom command should handle all the Cypress initialization tasks and start the application, from there just select any spec file and run the tests.