# React Card Search
Displays cards from an API and allows user to inspect them individually.

# Run locally
`npm i` installs all dependencies.

`npm start` starts the project locally.

# Run tests
`npm test` runs both acceptance and unit tests.

Use `npm run unit-test` or `npm run unit-tests` to run the `Jest` unit tests on their own.

Use `npm run acceptance-test` or `npm run acceptance-tests` to run cypress tests.

# Technology & Architecture
## Build process
webpack
babel

## UI
I used ReactJS to create the app because it's an ideal fit for the task at hand. This is because React allows you to create testable and resuable components, that are perfect for creating lightning fast UIs for the web. Resuable components means less code and hopefully a less complex application. Having fully tested components should mean your code is reliable and stable.

## Data Retrieval
I decided to use a relatively small package called Axios for making my calls to the API. I did consider other options such as Fetch - which I decided against because at the minute it is not supported by all browsers and would require me to implement a polyfill for it to work, something I felt was unnecessary for this task. I also considered using simple XMLHttpRequests, but I decided it would be quicker to implement Axios and it would also make my code more readable as the syntax is much simpler.

Axios allowed me to perform a simple get request with the card listings API Url, which returns a promise with my results. Then in order to display the details of a card when it was clicked, I simply stitched the `MoonpigProductNo` onto the end of the card details API Url and performed a get request on this.


## Routing
React router

## Styles
When I was deciding on styling for the application, I followed the Atomic Design Methodology. Atomic Design allowed me to split the design up into a hierarchical system of what Atomic Design calls, Atoms, Molecules and Organisms. Using this methodology means that not only is my UI split into resuable components, now my SASS is too. For example, the `image-card` molecule is a resuable component, which when grouped together with other `image-cards`, forms the `image-group` organism.

## What's next?
