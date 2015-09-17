workshops
=========

```
                             \`.
   .--------------.___________) \
   |//////////////|___________[ ]
   `--------------'           ) (
                              '-'
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ░▓ Training workshops at Springload                                        ▓
 ░▓ https://github.com/springload/workshops                                 ▓
 ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

[![Built with love](http://forthebadge.com/images/badges/built-with-love.svg)](http://www.springload.co.nz/)

| :construction:                                      | :triumph:                                | :ok_hand: |
|-----------------------------------------------------|-------------------------------------------------|-----------|
| [Functional JavaScript](#functional-javascript)     | JS, functional programming, array extras        | `X`         |
| [Unit Testing](#unit-testing)                       | JS, unit testing, tape                          | `X`         |
| [Thinking in React](#thinking-in-react)             | JS, React, ES6                                  | `X`         |
| ES6                                                 |                                                 |           |
| Writing Good Code™                                  | refactoring, without the rotation and shame |           |
| Child mode React                                    | React, without so much JS            |           |
| [Test-Driven Development](#test-driven-development) | JS, unit testing, TDD, refactoring, coverage    |           |
| Another take on FP JS / iterating           |                                                 |           |
| Events!                                             | Event bubbling, capture, custom events          |           |
| Scope                                               | this, const, let, var                           |           |

## Functional JavaScript

> Learn functional programming in JavaScript with a NodeSchool workshop! https://github.com/timoxley/functional-javascript-workshop.

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g functional-javascript-workshop
# Then, to run the workshop:
functional-javascript
```

#### What did we learn?

- For loops conflate three separate kinds of operations: filtering (`Array#filter`), reduction (`Array#reduce`) and transformation (`Array#map`).
- [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) (functions that take other functions as parameter) are very common in JavaScript.
- JavaScript's [Array "extras"](https://dev.opera.com/articles/javascript-array-extras-in-detail/) methods (`map`, `reduce`, `filter`, etc) are quite cool!

#### To go further

- [Underscore.js](http://underscorejs.org/), the most used "functional programming helpers" library.
- Good read on the topic of [FP and FP in JavaScript from MDN](https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/)
- What are `.bind`, `.apply` and `.call`? [Partial Application in JavaScript](http://benalman.com/news/2012/09/partial-application-in-javascript/)

## Unit Testing

> Learn to test anything with TAP! https://github.com/finnp/test-anything.

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g test-anything
# Then, to run the workshop:
test-anything
```

#### What did we learn?

- Unit testing is a useful practice to increase code quality, and to make maintenance easier.
- There are APIs built into Node and JavaScript to unit test code, like [`assert`](https://nodejs.org/api/assert.html).
- They aren't as good as open-source alternatives like [tape](https://www.npmjs.com/package/tape), or [Jasmine / Mocha + Chai](http://jasmine.github.io/).

#### To go further

- A [good article on unit testing](http://blog.codinghorror.com/i-pity-the-fool-who-doesnt-write-unit-tests/) by Jeff Atwood.
- Our [front-end starter kit](https://github.com/springload/frontend-starter-kit/) contains a simple test setup with Mocha and Chai.
- Future workshop: [Test-Driven Development](https://github.com/springload/workshops#test-driven-development-workshop)

## Thinking in React

> A workshopper module for learning React, based on [Thinking in React](http://facebook.github.io/react/docs/thinking-in-react.html).

#### To start the workshop

This workshop is heavily based on http://facebook.github.io/react/docs/thinking-in-react.html. Take a moment before you start to read the first two sections (Start and Step 1) from the comfort of your browser.

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g ThibWeb/thinking-in-react
# Then, to run the workshop:
thinking-in-react
```

At any moment, you can see your solution in the browser by running: `thinking-in-react server <solution file>`. The [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) will help you a lot.

Note: We will make heavy use of JSX and ES6. Make sure that your editor has syntax highlighting for those.

#### What did we learn?

- React makes you think of your UI in terms of a [component hierarchy](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy).
- It uses a syntax called [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html), and goes very well with [ES6 / ES2015 JavaScript](https://babeljs.io/docs/learn-es2015/).
- The data flows in one direction from a component to its children, with [`props` and `state`](http://facebook.github.io/react/docs/multiple-components.html#data-flow).

#### To go further

- We can create explicit [inverse data flows](http://facebook.github.io/react/docs/thinking-in-react.html#step-5-add-inverse-data-flow) to propagate new data to parent components.
- React's architecture pattern of choice is called [Flux](https://facebook.github.io/flux/docs/overview.html).
- There are [lots](http://react.rocks/) of [components](http://react.parts/web) available [online](http://react-components.com/).

## Test-Driven Development

> A refactoring kata in JavaScript with Mocha and Chai https://github.com/ThibWeb/gilded-roses.

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
git clone git@github.com:springload/workshops.git
cd workshops/tdd-workshop/
npm install
npm install -g eslint eslint-config-airbnb eslint-plugin-react babel-eslint
# Then, to run the workshop:
npm start
# Run the coverage
npm run coverage
open coverage/lcov-report/index.html
# Run the linting
npm run lint
```

#### To go further

TODO

#### What did we learn?

TODO
