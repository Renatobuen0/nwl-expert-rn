# NWL Expert RN

This is a React Native application built with Expo, TypeScript, and Zustand. It's a simple e-commerce app with a shopping cart feature.

## Project Structure

-   `src/app/`: Contains the main application files and routes.
-   `src/components/`: Contains reusable components used throughout the application.
-   `src/stores/`: Contains the Zustand store for managing application state.
-   `src/types/`: Contains TypeScript type definitions.
-   `src/utils/`: Contains utility functions and data.
-   `assets/`: Contains static files like images.
-   `package.json`: Defines the project dependencies and scripts.
-   `tsconfig.json`: Configures TypeScript compiler options.
-   `tailwind.config.js`: Configures Tailwind CSS for styling.
-   `babel.config.js`: Configures Babel for transpiling the code.
-   `app.json`: Configures the Expo settings for the application.

## Key Files

-   `src/app/_layout.tsx`: The main layout of the application.
-   `src/components/Header.tsx`: The header component, which includes a shopping cart icon.
-   `src/stores/CartStore.ts`: The Zustand store for managing the shopping cart state.
-   `src/stores/helpers/cartInMemory.ts`: Helper functions for managing the shopping cart in memory.
-   `src/components/LinkButton.tsx`: A button component that links to different routes.
-   `utils/data/products.ts`: Contains the product data for the application.

## Running the Project

To run the project, use one of the following commands defined in the `package.json` file:

-   `npm run start`: Starts the development server.
-   `npm run android`: Starts the development server and loads the app on a connected Android device or emulator.
-   `npm run ios`: Starts the development server and loads the app on a connected iOS device or simulator.
-   `npm run web`: Starts the development server and loads the app in a web browser.

## Testing

To run the tests, use the `npm run test` command. The tests are configured with Jest, as defined in the `package.json` file.

## Styling

The application uses Tailwind CSS for styling, configured in the `tailwind.config.js` file.

## State Management

The application uses Zustand for state management. The shopping cart state is managed in the `src/stores/CartStore.ts` file.

## Environment

The application uses Expo for the development environment. The Expo settings are configured in the `app.json` file.
