# Day One Tech Project

This repo is the solution to the technical test from DayOne available [here](https://dayoneengagement.notion.site/Test-technique-Full-Stack-c8d748bb837c4b6cbfb82f1a70071e6a).

It uses Vite scaffolding to get a quick repository running with Typescript, Jest, React Testing Library, React router, Emotion and Apollo GraphQL.

The project is composed of two main pages :

- The first one is the main page / and displays the list of Todo tasks available from the API
- The second one displays one Task precisely and is available on pages /:todoId

A filter is available to either sort by date, or to display only specific types or specific doneness.

There is also a checkbox for the state of doneness of the task that can mutate the data from the API in order to complete a task or uncomplete it.

The project is typed and uses the codegen from Apollo GraphQL to fetch the typing from the API, partially covered using React testing Library, and uses Sonarqube to get a quick overview of the quality of the code.

## Installation and running the project

Make sure you're using the provided backend server from the tech test.

- Running the project : `npm i` followed by `npm run dev`
- Testing the project : `npm test`
- Compile and generate the typings from the backend : `npm run compile`
- Building for production: `npm run build`
