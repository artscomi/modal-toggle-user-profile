This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Acceptance Criteria
* on the start page there is a button
* clicking this button should open a modal
* data should be fetched when the modal is opened

(fetch data from https://random-data-
api.com/api/users/random_user?size={size})

* during the fetch request display a simple loading
state (text is ok)
* in the modal window display the "profile" of a
selected user, consisting of avatar, full name and email
* in the modal window it is possible to configure the
amount of users to be fetched via a text input
* in the modal window it is possible to fetch another
set of users by pressing a button
* when asking for more than 20 users an error should
be displayed and the fetch should not start
* in the dialog there is a close button, if the dialog is
re-opened the same set of users is visible
* only fetch if the dialog is opened for the first time, or
the next-button is clicked
* add the possibility to switch between the users using
a toggle bar
* clicking a button on bar displays the appropriate
profile
## Nice to have:
* the toggle bar should have multiple rows
* each row should have up to 5 buttons
* all rows except the last one should have the same
amount of buttons
* please develop a simple algorithm so that the last
row should have the largest number of buttons
possible while having at most as many as the rows
above (.e. 10 items => 5 5, 11 items => 4 4 3, 12 items
=> 4 4 4, 13 items => 5 5 3, 14 items => 5 5 4 – see
screenshots provided)
* The multi-row bar should have rounded corners on
each row in the first and last buttons