# Rick and Morty Character Gallery

This project is a web application that fetches character names and pictures from the Rick and Morty API using GraphQL and displays them in a grid view. The application is built with React, Redux Toolkit, Material-UI, Tailwind CSS, and tested with Jest and React Testing Library.

## Features

- **Fetches Data Using GraphQL**: The application uses the `graphql-request` library to fetch data from the Rick and Morty API. It fetches character names and pictures using a GraphQL query.

- **State Management with Redux Toolkit**: The fetched data is stored in the state using Redux Toolkit. Redux Thunk is used for asynchronous actions.

- **Grid View with Material-UI**: The character names and pictures are displayed in a grid view using the Grid component from Material-UI.

- **Loading State with Material-UI Skeletons**: While the data is being fetched, the application shows Skeleton components from Material-UI to indicate the loading state.

- **Styling with Tailwind CSS**: The application is styled using Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces.

- **Testing with Jest and React Testing Library**: The application is tested using Jest and React Testing Library. Tests include checking if the correct data is displayed and if the loading state is shown correctly.

- **Mocking Server Response with MSW**: The `msw` (Mock Service Worker) library is used to mock the server response in tests. This allows testing how the application handles different server responses.

## Getting Started

To get started with this project, clone the repository and install the dependencies with `npm install`. You can start the development server with `npm start`.

To run the tests, use the `npm test` command. This will run all tests with Jest and React Testing Library.

## Contributing

Contributions to this project are welcome. If you find a bug or think of a new feature, please open an issue. If you want to implement a bugfix or feature yourself, feel free to open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.