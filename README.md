
# Rick and Morty Character Gallery
  This project is a web application that fetches character names and pictures from the Rick and Morty API using GraphQL and displays them in a grid view. The application is built with React, Redux Toolkit, Material-UI, Tailwind CSS, and tested with Jest and React Testing Library.

 
## Installation

Follow these steps to clone and install the application:

1. **Clone the Repository**: First, you need to clone the repository to your local machine. You can do this with the following command:

```bash
git clone https://github.com/Rezaraki/Rick-Morty-Pics
```
**Usage (with [degit](https://github.com/Rich-Harris/degit))**    
You could use degit instead of cloning the whole history of the repository.
```bash
degit Rezaraki/Rick-Morty-Pics Rick-Morty-Pics
```
2. **Navigate to the Project Directory**: Use the `cd` command to navigate to the project directory:

```bash
cd Rick-Morty-Pics
```

Replace `Rick-Morty-Pics` with the name of the project.

3. **Install the Dependencies**: Install the Dependencies: The project dependencies are listed in the package.json file. You can install these dependencies using yarn with the following command:

```bash
yarn 
```
This command installs all the dependencies for the project.

4. **Start the Development Server**: You can start the development server with the following command:

```bash
yarn dev
```

This command starts the development server. 

## Testing

To run the tests for the application, use the following command:

```bash
yarn test
``` 

This command runs all the tests with Jest and React Testing Library.
 
 
## Features

- **Fetches Data Using GraphQL**: The application uses the `graphql-request` library to fetch data from the Rick and Morty API. It fetches character names and pictures using a GraphQL query.

- **State Management with Redux Toolkit**: The fetched data is stored in the state using Redux Toolkit. Redux Thunk is used for asynchronous actions.

- **Grid View with Material-UI**: The character names and pictures are displayed in a grid view using the Grid component from Material-UI.

- **Loading State with Material-UI Skeletons**: While the data is being fetched, the application shows Skeleton components from Material-UI to indicate the loading state.

- **Styling with Tailwind CSS**: The application is styled using Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces.

- **Testing with Jest and React Testing Library**: The application is tested using Jest and React Testing Library. Tests include checking if the correct data is displayed and if the loading state is shown correctly.

- **Mocking Server Response with MSW**: The `msw` (Mock Service Worker) library is used to mock the server response in tests. This allows testing how the application handles different server responses.

## Live
live at https://rick-morty-pics.netlify.app
