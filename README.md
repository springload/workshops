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

## Functional JavaScript

> Learn functional programming in JavaScript with a NodeSchool workshop! https://github.com/timoxley/functional-javascript-workshop.

### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g functional-javascript-workshop
# Then, to run the workshop:
functional-javascript
```

### What did we learn?

- For loops conflate three separate kinds of operations: filtering (`Array#filter`), reduction (`Array#reduce`) and transformation (`Array#map`).
- [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) (functions that take other functions as parameter) are very common in JavaScript.
- JavaScript's [Array "extras"](https://dev.opera.com/articles/javascript-array-extras-in-detail/) methods (`map`, `reduce`, `filter`, etc) are quite cool!

### To go further

- [Underscore.js](http://underscorejs.org/), the most used "functional programming helpers" library.
- Good read on the topic of [FP and FP in JavaScript from MDN](https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/)
- What are `.bind`, `.apply` and `.call`? [Partial Application in JavaScript](http://benalman.com/news/2012/09/partial-application-in-javascript/)

## Unit Testing workshop

> Learn to test anything with TAP! https://github.com/finnp/test-anything.

### To start the workshop

You'll need Node installed. Then, from the command line:

```sh
# To install the workshop:
npm install -g test-anything
# Then, to run the workshop:
test-anything
```

### What did we learn?

- Unit testing is a useful practice to increase code quality, and to make maintenance easier.
- There are APIs built into Node and JavaScript to unit test code, like [`assert`](https://nodejs.org/api/assert.html).
- They aren't as good as open-source alternatives like [tape](https://www.npmjs.com/package/tape), or [Jasmine / Mocha + Chai](http://jasmine.github.io/).

### To go further

- A [good article on unit testing](http://blog.codinghorror.com/i-pity-the-fool-who-doesnt-write-unit-tests/) by Jeff Atwood.
- Our [front-end starter kit](https://github.com/springload/frontend-starter-kit/) contains a simple test setup with Mocha and Chai.
- Future workshop: [Test-Driven Development](https://github.com/springload/workshops#test-driven-development-workshop)

## Test-Driven Development workshop

> A refactoring kata in JavaScript with Mocha and Chai https://github.com/ThibWeb/gilded-roses.

### To start the workshop

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

### To go further

TODO

### What did we learn?

TODO
