# Pleo Coding Challenge: Overview
I looked at pleo's website, and saw a screenshot of what one page in the pleo dashboard looks like, and I decided to do this challenge based off of that screenshot, on eye alone.

This is a **lerna** mono-repo containing three packages: `pleo-be`, `pleo-fe`, and `pleo-types`.
* `pleo-be` is the original api code plus a lot of alterations and extra features, as I describe below.
* `pleo-fe` is the React frontend.
* `pleo-types` contains some typescript declaration files shared by `pleo-fe` and `pleo-be`.

I chose this structure so I could seamlessly work on all three packages concurrently.

* the source code for the packages is in the `apps` directory

## Install dependencies
At the root directory, 
1. run `yarn install`
2. run `yarn bootstrap`

## Run the apps
Open two terminals. 

1. At the project root directory in one terminal, run `yarn start:fe`. This starts the React development server on `http://localhost:3000`.

2. In the other terminal, at project root directory, run `yarn start:be`. This starts the node.js api server on `http://localhost:5000`. 

I'm using nodemon for automatically restarting the api server on changes to the code. This is very helpful for development.

# Features

## General

* The code is entirely in `TypeScript` using strict mode.

* Code formatting is done automatically by `prettier`.

## `pleo-be`

* I added a custom module (`src/data/index.ts`) to perform CRUD operations on disk for data representing expenses. Data is saved in `src/.data`. Data is thus persisted between server restarts, in particular newly created expenses and comments.

* I improved the organization of the modules, and separated the code defining the routes from the code implementing the handlers.

* There are some extra handlers:

  * `createExpense` to create a new expense (used with a form in `pleo-fe`)
  * `deleteExpense` to delete an expense
  * `createExpenseComment` lets you create as many comments as you'd like for an expense
  
* I extracted types that are shared with `pleo-fe` into a separate package, `pleo-types`. In development, all the packages are symlinking to the others, but in production, each package would be a separate package in the npm registry and they would refer to each other through `node_modules`.

## `pleo-fe`

### main features

#### state management

* `redux` is the tool used here, because it is the solid choice that is battle-tested and provides clear idioms for code organization.
  * Note the directory structure, with `api`, `actions`, and `reducers` clearly separated; furthermore, `actions` are split into `syncActions` and `asyncAction`, with corresponding types in yet another file. This split is repeated for each grouping of actions, and each grouping for the most part corresponds to a major state piece in the top-level Redux state.
  * However, I don't split all files by their type; I like to strike a balance between that approach and placing complementary files close together. This is why `selectors` are all close to the respective reducers that contain the state the selectors select from.
  * There is only one big state piece, `expenses`, but I am using the idiomatic normalized form: `byId` and `allIds`.
  * I am using `immer.js` in most of the reducers to make the code a little bit more concise by using syntax that looks like it mutates, but because I am using immer.js, I am guaranteed to be using immutable data structures.
  * I've used `reselect` to memoize some selectors. In this app there wasn't much need to do this, but I have used this extensively in practice in situations where performance was critical, so wanted to include it here for demonstration purposes.
  * I'm using `redux-thunk` for asynchronous actions; this is the most straightforward option and usually does the trick. I could also have used `redux-saga` or custom redux middleware, but either would be quite a bit too much overkill.

#### styling

* I am not using any component libraries: everything is custom CSS.
* I am using `styled-components` because of the effect it has on code organization: the React component is the fundamental unit of code and styling reuse. Furthermore, when I look at the render method of a React component, I don't like to see too many lines of code, and if I do, I want the JSX to read out as if I were describing the contents of the component. `styled-components` lets you name the wrapped components semantically in this way and I love it.
* I am using SVG directly: the icons are all custom React components with SVG in their JSX. I got the SVG from feather icons, but I made the alterations to the SVG code myself. 
* An example of totally custom SVG is the green radial gradient element on the right panel of the dashboard, at the top-right corner.
* Fonts are self-hosted, and colors are defined in their own module.

#### search

* I am using the library `fuse.js` to search the list of expenses.
* You can see the code for how I am using this library in `src/modules/search.ts`
* When you enter something in the search bar, it searches the keys `currency`, `merchant`, `comments.text`, `user.first`, and `user.last` in each expense object

#### add new expense

* By clicking the round plus icon in the middle panel, a custom modal appears with a form to enter information to create a new expense.

#### delete an expense

* In the right panel, you can delete an expense.

#### add comments

* You can click on an expense in the middle panel and its details are shown in the righthand panel; here you can add as many comments as you wish
* Note that I have not implemented `delete comment`: this could be easily done though.
  
#### add receipt images

* I am using a hidden input field of type "files" for this
* Note that I am only allowing `image/jpeg` and `image/png` files to be submitted.
* This component has lots of features
  * It has different states: no image selected, image selected but not submitted, and image submitted
  * in the not submitted state, there is an overlay on the image preview, and a button for you to actually submit to the backend
  * the images are persisted to disk on the backend server, and the images are fetched and shown for each of the persisted images