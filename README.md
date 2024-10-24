# Comnica

## Table of contents
* [General info](#general-info)
* [Description](#description)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Setup & Start](#setup-start)
* [State](#state)
* [Routes](#routes)
* [To Test](#to-test)
* [Directory Structure](#directory-structure)
* [Deploy](#deploy)
* [Created](#created)
* [License](#license)

## General info <a id="general-info"></a>

Test tasks for Comnica

## Description <a id="description"></a>

JavaScript fetchdata.js and React test assignment for Comnica

## Screenshot <a id="screenshot"></a>

![Weather Forecast](./public/comnica-screenshot.jpg)

## Technologies <a id="technologies"></a>

* Node.js - version 18.x or higher
* React - Frontend Library
* Typescript - Javascript library
* Vite.js - Build tool
* Tailwind CSS - Styling
* Cypress - End-to-End testing framework for responsive design
* Jest - JavaScript Testing Framework
* Babel - JavaScript Compiler
* lazySizes - VanillaJS library

## Setup & Start <a id="setup-start"></a>

* Clone or download the repository:

    ```sh
    git clone https://github.com/ivorszaniszlo/comnica-test.git
    ```

* Navigate to the project directory:

    ```sh
    cd comnica
    ```

* Install the required dependencies:

    ```sh
    npm install
    ```

* Start the development server:

    ```sh
    npm run dev
    ```

* Open the app in your browser at:

    ```plaintext
    http://localhost:5173
    ```

## State <a id="state"></a>

The application's state is managed with React's `useState` hooks.

## Routes <a id="routes"></a>

- `/` – Main page

## To Test <a id="to-test"></a>

Cypress is used for automated responsive testing. The tests simulate different screen sizes, such as mobile, tablet, and desktop views, across multiple browsers to ensure the application is properly responsive.

### Run Cypress tests:

1. Install Cypress:

    ```sh
    npm install cypress --save-dev
    ```

2. Open Cypress interactive mode:

    ```sh
    npx cypress open
    ```

3. Cypress will open a test interface. Select the **responsive.cy.js** test file located in the **`cypress/e2e/`** folder to test the responsiveness of the application across different screen sizes (iPhone 14, iPad Pro M2, desktop).

4. Alternatively, to run Cypress tests in headless mode, use:

    ```sh
    npx cypress run
    ```

### Test on Multiple Browsers:

Cypress allows you to run tests on multiple browsers, including Chrome, Edge, and Firefox.

To run tests on specific browsers, use the following commands:

1. **Run on Chrome**:

    ```sh
    npx cypress run --browser chrome
    ```

2. **Run on Edge**:

    ```sh
    npx cypress run --browser edge
    ```

3. **Run on Firefox**:

    ```sh
    npx cypress run --browser firefox
    ```

> **Note:** Although Safari is not natively supported by Cypress, you can use **Firefox** (which is based on a similar rendering engine as Safari) for similar results.

### Run Unit Tests with Jest:

1. Install Jest:

    ```sh
    npm install --save-dev jest
    ```

2. Run Jest tests:

    ```sh
    npm run test
    ```

3. The unit tests for the `fetchUsersAndAssignColors` function are located in the `tests/fetchUsersAndAssignColors.test.js` file.

### Running `fetchUsersAndAssignColors.js` in the Browser

To run the `fetchUsersAndAssignColors.js` file in a browser environment:

1. Copy the function code from `fetchUsersAndAssignColors.js` and paste it into the browser's developer console.

2. Remove the `export default` statement, and directly call the function like so:

    ```javascript
    fetchUsersAndAssignColors()
      .then((usersWithColors) => {
        console.log('Users with colors:', usersWithColors);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    ```

3. Open the developer console in your browser (`F12` or `Ctrl+Shift+I`), paste the modified code, and run it.

## Directory Structure <a id="directory-structure"></a>

```plaintext
/comnica
├── cypress
│   ├── e2e
│   │   └── responsive.cy.js         # Cypress tests for responsive design
│   ├── fixtures
│   ├── support
├── public
│   ├── assets
│   │   └──logo.svg
├── src
│   ├── components
│   │   ├──Aside
│   │   │    └── Aside.tsx
│   │   ├──Button
│   │   │    └── Button.tsx
│   │   ├──Container
│   │   │    └── Container.tsx
│   │   └──Header
│   │        └── Header.tsx
│   ├── helpers
│   │   └── fetchUsersAndAssignColors.js         # Helper functions
│   ├── App.tsx
│   ├── index.css
│   └── main.jsx
├── tests
│   └── fetchUsersAndAssignColors.test.js # Unit tests for fetchUsersAndAssignColors function using Jest
├── .gitignore
├── .prettierrc
├── babel.config.json
├── cypress.config.js
├── eslint.config.js
├── index.html
├── jest.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Deploy <a id="deploy"></a>

You can deploy this application using **Surge**:

* Install Surge globally:

    ```sh
    npm install --global surge
    ```

* Build the project for production:

    ```sh
    npm run build
    ```

* Deploy the build folder:

    ```sh
    surge ./dist
    ```

* Check out Surge's [documentation](https://surge.sh/) for more details.

* Deployed on [ivor-comnica.surge.sh](https://ivor-comnica.surge.sh)

## Created <a id="created"></a>

2024

## License <a id="license"></a>

Copyright @ all rights reserved: Szaniszló Ivor
