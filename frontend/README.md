![image](https://user-images.githubusercontent.com/35191030/137798473-05c72ca7-8a48-4377-afea-df7ec9ed7845.png)

# React TypeScript Webpack Babel Setup Template

This is a template/boilerplate that can be used to build **React** webapps written in **TypeScript** with **Webpack** as module loader. This boilerplate contains support for following loaders and modules:

-   [Babel](https://babeljs.io/)
-   `css-loader` and `style-loader`
-   [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
-   [styled-components](https://styled-components.com/) 💅
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
-   [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Getting Started

### To run the template locally:

-   Clone the repo and run `yarn` or `npm install` to install packages.
-   Run `yarn start` or `npm start`. This will start the app in development mode on `http://localhost:3000`.

### To make build of the app:

-   Run `yarn build` or `npm run build` for production mode.
-   Script will be generated inside build folder `build/static`.

### To run tests:

-   Create tests in `src/__tests__`. (You can change this in `test` script in `package.json`)
-   Run `yarn test` or `npm test` to execute the tests.

### To run storybook:

-   Create stories anywhere in `src`.
-   Run `yarn storybook` or `npm run storybook` to initialize Storybook at `http://localhost:6006`.

### To run linting checks

-   Run `yarn lint` or `npm run lint`.
-   Note: In ESLint configuration, I have `no-unused-vars: off` so as to avoid seeing warnings while coding but I turn it on when I run linting check.

### To run Prettier formatting:

-   Run `yarn format` or `npm run format` to apply Prettier configurations. (see `.prettierrc.js`)
