# Movie Browser PA

A React application for browsing movies, built with Vite. This project provides a fast and efficient way to explore movie data, featuring a clean user interface and responsive design.

A modern, and accessible movie browsing application built using a modern frontend framework/library with dynamic search, infinite scrolling, filtering options, and local storage for favorites.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Pages and Routes](#pages-and-routes)
- [Components](#components)
- [Getting Started](#getting-started)
- [Design Decisions](#design-decisions)
- [Improvements](#improvements)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **React Router**: For handling routing in the application.
- **Tailwind CSS**: For styling components with utility-first CSS.
- **Lucide React**: For icons.

## Features

- Browse a list of movies.
- Search for movies by title.
- Infinite scrolling for loading more movies.
- Add and remove favorite movies.
- Responsive design for mobile and desktop views.

## Pages and Routes

The application consists of the following pages and routes:

- **Home Page (`/`)**: Displays a list of movies with a search bar.
- **Favorites Page (`/favorites`)**: Displays a list of favorite movies.
- **NotFound Page (`/404`)**: Displays a 404 error message for unknown routes.

## Components

The application is structured into several reusable components:

- **App**: The main component that sets up routing.
- **Header**: Displays the application title and navigation.
- **MovieList**: Renders a list of movies.
- **MovieCard**: Represents a single movie item in the list.
- **FavoriteButton**: Allows users to add or remove movies from favorites.
- **SearchBar**: Allows users to search for movies by title.
- **NotFound**: Displays a 404 error message.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**:
   - `git clone https://github.com/zews78/movie_browser_pa.git`

2. **Navigate to the Project Directory**:
   - `cd movie_browser_pa`

3. **Install Dependencies**:
   - `npm install`

4. **Run the Development Server**:
   - `npm run dev`

Open your browser and navigate to [http://localhost:3000](http://localhost:5173/) to view the application.

## Design Decisions

- **Component-Based Architecture**: The application uses a component-based architecture to promote reusability and maintainability.
- **Responsive Design**: Tailwind CSS is used to ensure the application is responsive, providing a seamless experience on both mobile and desktop devices.
- **State Management**: Local component state is utilized for managing the search input and selected movie details, keeping the application simple and efficient.
- **Local Storage**: Favorites are managed using localStorage to persist user preferences.

## Improvements

Several areas can be enhanced for a better user experience and performance:
- **Error Handling**: Implement improved error handling for API requests to provide better user feedback in case of failures.
- **Loading States**: Add loading indicators while fetching data to improve the user experience.
- **Pagination**: Implement pagination to handle large datasets efficiently.
- **Unit Testing**: Add unit tests for components to improve reliability and maintainability.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:
- Open an issue, or
- Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out this project! Happy coding!
