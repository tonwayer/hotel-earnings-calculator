# Hotel Revenue Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A room occupancy optimization tool for one of our hotel clients! Our customer has a certain number of free rooms each night, as well as potential guests that would like to book a room for that night.
Our hotel clients have two different categories of rooms: Premium and Economy. Our hotels want their customers to be satisfied: they will not book a customer willing to pay EUR 100 and over for the night into an Economy room. But they will book lower paying customers into Premium rooms if these rooms would be empty and all Economy rooms will be filled by low paying customers. Highest paying customers below EUR 100 will get preference for the “upgrade”. Customers always only have one specific price they are willing to pay for the night.

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn deploy`

Deploy the application to githubpages. https://tonwayer.github.io/hotel-earnings-calculator/
