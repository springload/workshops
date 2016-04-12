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

| :construction:                                      | :triumph:                                       | :ok_hand: |
|-----------------------------------------------------|-------------------------------------------------|-----------|
| [Functional JavaScript](#functional-javascript)     | JS, functional programming, array extras        | `X`       |
| [Unit Testing](#unit-testing)                       | JS, unit testing, tape                          | `X`       |
| [Thinking in React](#thinking-in-react)             | JS, React, ES6                                  | `X`       |
| [ES6 JavaScript](#es6-javascript)                   | JS, ES6                                         | `X`       |
| [Writing Good Code™](#writing-good-code)                                  | Code smells, refactoring, OOP, FP, etc     | `X`       |

| Child mode React                                    | React, without so much JS                       |           |
| [Test-Driven Development](#test-driven-development) | JS, unit testing, TDD, refactoring, coverage    |           |
| Another take on FP JS / iterating                   |                                                 |           |
| Events!                                             | Event bubbling, capture, custom events          |           |
| Scope                                               | this, const, let, var                           |           |

# Workshops

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
npm install -g thinking-in-react
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

## ES6 JavaScript

> An intro to new features coming up in the next version of JavaScript, ES6 / ES2015. https://github.com/domenic/count-to-6

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g count-to-6
# Then, to run the workshop:
count-to-6
```

#### What did we learn?

- [ES6](http://www.es6fiddle.net/) is JavaScript's latest version, introducing new syntax.
- Since the browser support is not perfect, we compile it to ES5 using [Babel](https://babeljs.io).
- ES6 has [a lot of new features](https://github.com/lukehoban/es6features#readme).

#### To go further

- Have a look at ["real world" examples from our projects](https://github.com/springload/workshops/blob/master/count-to-6/es6-examples.js).
- Try out ES6 features [in your browser](http://www.es6fiddle.net/).
- An [ES6 quiz / brain teaser](http://perfectionkills.com/javascript-quiz-es6/).

## Writing Good Code [![Code Climate](https://codeclimate.com/github/springload/workshops/badges/gpa.svg)](https://codeclimate.com/github/springload/workshops/writing-good-code/src/gilded_rose.js)

> An adaptation of a refactoring kata in JavaScript with Mocha and Chai https://github.com/ThibWeb/gilded-roses.

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
git clone git@github.com:springload/workshops.git
cd workshops/writing-good-code/
npm install
npm install -g eslint eslint-config-airbnb eslint-plugin-react babel-eslint buddy.js
# Then, to run the workshop:
npm start
# Run the coverage
npm run coverage
open coverage/lcov-report/index.html
# Run the linting
npm run lint
```

#### What did we learn?

TODO

#### To go further

Useful resources on writing good JavaScript:

- A modern book, [Eloquent JavaScript](http://eloquentjavascript.net/).
- [Idiomatic.js](https://github.com/rwaldron/idiomatic.js), one of the first JS styleguides.
- One of the most used JavaScript styleguides, which we use at Springload, [airbnb/javascript](https://github.com/airbnb/javascript)

## Test-Driven Development

> A refactoring kata in JavaScript with Mocha and Chai https://github.com/ThibWeb/gilded-roses.

#### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
git clone git@github.com:springload/workshops.git
cd workshops/tdd-workshop/
nvm install
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

#### What did we learn?

TODO

#### To go further

TODO

# How to run a session

A workshop session involves the following activities:

- Preparing the workshop
    + Researching content
    + Testing the content
    + Booking a time and place
    + Advertising the workshop session
- Running the session (introduction, workshop, debrief)
- Sending follow-up material to attendees

Rinse, repeat!

The preparation / follow-up phases usually take around __two hours for one person__, assuming that the workshop's material is pre-existent. The workshop session itself takes __two hours for each attendee__. It is also better if the participants have a bit of time before the workshop to prepare their environment, and after it to step back and reflect on their learning.

#### Finding workshop material

Our workshop usually take the form of [NodeSchool](http://nodeschool.io) `workshopper` modules.

#### Convincing your boss

> If you [work for Springload](http://www.springload.co.nz/jobs/), your boss will be very keen to see you invest time in your team's skills.

The goal of a training workshop is to help people get better at their craft, acquire new skills and advance in their career. It is a low-overhead alternative to professional training that encourages self-training.

Bullet points:

- Investing in your team's skills improves the quality of their work.
- Use a vast collection of freely available, open-source workshop content.
- Empower your team with the responsibility to train themselves.

#### Measuring the success of a workshop

- Attendance (Number of people)
- Attendees' opinion (ROTI, Return On Time Invested – not the bread)
- Attendees' self-evaluation of their skills
