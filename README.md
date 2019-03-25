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
## Build tools used
I used Webpack and webpack-dev-server to compile code and so that I could run the app on a local server during development.

I used Babel to transpile my ES6 code into ES5 so that it is readable for the browser.

To convert my Sass into CSS, I used a package called `node-sass-chokidar`. This also gave me the ability to `watch` my CSS files for changes during development. This means every time I hit save in my `.scss` files, I didn't have to restart the server to see my changes.

## UI
I used ReactJS to create the app because it's an ideal fit for the task at hand. React allows you to create testable and resuable components, that are perfect for creating lightning fast UIs for the web. Resuable components means less code and hopefully a less complex application. Having fully tested components means your code will be more reliable and stable.

### Styling
Usually when working on a large scale application, I am used to following the Atomic Design methodology by Brad Frost. However, I felt it was more important in this project to demonstrate my knowledge of the BEM methodology, as this is the methodology that Moonpig appear to be using. Although the two methodologies can be used side by side, I decided that this would be slightly convoluted for such a small application.

I wrote my actual styles using Sass (.scss), as this gives me the benefits of using variables and makes my code both more readable and resuable, as I am able to nest certain elements.

## Testing
### Jest
For my unit tests, I coupled Jest with Enzyme. I decided to use Jest over other testing frameworks (such as Karma) as I have found that it is much more simple to set up, but still allows me to write tests in the same way I am used to with other testing libraries (such as Jasmine). The most advantageous thing about Jest however, are it's snapshot tests. These tests are very simple to write and give you a lot of code coverage for free. 

Also, Jest allows me to integrate with Enzyme (just like Karma/Jamsine do), so I was still able to reap the benefits of shallow rendering my components - something that comes in handy when you are using snapshot tests, because it allows your snapshot tests to be localised to the component they are supposed to be testing.

I wrote a [blog post](https://medium.com/@_CalFlanagan/playing-with-jest-b0bf7da3ca76) about my first experience using Jest, where I went into detail about the benefits I found when using it.

### Cypress
I chose to use Cypress for my intergration tests, firstly for it's simplicity in setup when compared to the setup up of Karma and Webdriver. Secondly, Cypress provides you with a very nice intuitive UI, that allows you to interact with the tests in the browser. The UI allows you to see the state of an element before and after an action has occured and also allows you to identify the route to an element using a selection tool, making writing tests much easier.


## Data Retrieval
At first, I considered using the Fetch API for my data retrieval, however I decided against it, as it is not supported by all browsers and would require me to implement a polyfill for it to work - something I felt was overkill for this task. Instead I chose to use a relatively small API called Axios, for making my calls to the Moonpig API. Axios is more widely supported and still fits the purpose of performing simple GET requests. I also considered using simple XMLHttpRequests, but I decided it would be quicker and easier to implement and test Axios.

Axios allowed me to perform a simple get request with the card listings API Url, which returns a promise with the results (the "Products"). Then in order to display the details of a card (Product) when it is clicked, I simply stitched the `MoonpigProductNo` onto the end of the second API Url and performed a GET request with this. The second call then returns the details for a specific card, based on the `MoonpigProductNo` provided.

## Issues I faced
The first issue I had, occured when trying to link up my stylesheet. The issue occurred because my webpack-dev-server config wasn't set up correctly. I needed to tweak the config file to tell it where it's `contentBase` was (the reference to the compiled styles).

CORS also caused me issues as anticipated. I looked into the link that was provided for the CORS anywhere API, and at first I thought I would have to add a function into my `card-listings-service` that would append the CORS API Url to the Url being used to make my API call for the cards. However, I remembered a similar issue I had with CORS in the past when performing a GET request on another API. In that instance the API I used was `https://cors.io`, but it appeared the concept was the same as the `https://cors-anywhere.herokuapp.com/` API provided. So, I quickly realised that I simply had to append the cors API Url to front of the original API call and that worked around the CORS exception.

## What's next?
The first improvement I would make if I was to spend more time on this, would be to improve the accessibility of the card details modal by allowing users to click the escape key to close it. This, in addition to the already implemented functionality of being able to tab across elements and use enter to open the modal, would have enabled full keyboard navigation of the app.

The next thing I would like to tackle if I was to spend more time on the app, would be to implement a search by card name functionality. I would do this by looping over the response from the API and return the cards whose title's contain the words the user inputs. I would return the results as the user types, so that the feedback loop is almost instant.

Sometimes, card details have quite long descriptions that take up a lot of space in the modal, which on a mobile can mean a lot of scrolling for the user. So I decided to trim the descriptions using the `substring()` method. However, it would be nice to add a 'view more' button if I spent more time on the app, to reveal the rest of the description, should the user want to read all of it.

Another improvement I would like to add if I spent more time on the app, would be routing. My plan was to implement an add to basket feature, which would allow the user to place cards in their basket at the click of a button. Routing would then have allowed me to take the user to their 'basket' page so they could see which cards they selected. I would have used `react-router` to do this.

The final improvement I would like to make to the app, would be to add Redux. This would give the app a localised state that all components would have access to, therefore making tasks such as showing how many cards are in a users basket much easier, because I wouldn't have to pass state between components using props and callbacks anymore.

Something I considered but decided not to implement, was a smooth scrolling animation when the scroll-to-top button is clicked. I decided against implementing this in an effort to maintain a good level of accessibility. It is generally not best for accessibility to hijack native browser actions, such as scrolling or switching focus.