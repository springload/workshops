writing-good-code (gilded-roses)
================================

## Setup

```sh
git clone https://github.com/springload/workshops.git
cd workshops/writing-good-code/
nvm install
npm install
npm install -g eslint eslint-config-airbnb eslint-plugin-react babel-eslint
```

## Commands

```sh
# Run the tests with a watcher
npm start
# Run the coverage
npm run coverage
open coverage/lcov-report/index.html
# Run the linting
npm run lint
```

## Requirements

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

- All items have a `SellIn` value which denotes the number of days we have to sell the item
- All items have a `Quality` value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `Quality` degrades twice as fast
- The `Quality` of an item is never negative
- "Aged Brie" actually increases in `Quality` the older it gets
- The `Quality` of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in `Quality`
- "Backstage passes", like aged brie, increases in `Quality` as it's `SellIn` value approaches; `Quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but `Quality` drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- "Conjured" items degrade in `Quality` twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the `Item` class or `Items` property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the `UpdateQuality` method and `Items` property static if you like, we'll cover for you).

Just for clarification, an item can never have its `Quality` increase above 50, however "Sulfuras" is a legendary item and as such its `Quality` is 80 and it never alters.

## Points of interest

## Useful tools

http://eslint.org/
https://github.com/kucherenko/jscpd

## Magic numbers

> https://github.com/danielstjules/buddy.js

```js
const $first = $availabilityStatus.slice(0, 20);
const $other = $availabilityStatus.slice(20, $availabilityStatus.length);
```

```js
getOrdinalSuffix: function(number) {
    var suffixes = ['th', 'st', 'nd', 'rd'];
    var relevantDigits = (number < 30) ? number % 20 : number % 30;
    return (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
}
```

```js
// ./client/js/actions/account.js:92
const employeeRate = Math.max(payload.employeeContributionRate, 3);
// ./client/js/actions/account.js:93
const employerRate = Math.min(Math.max(payload.employerContributionRate, 3), employeeRate);
// ./client/js/actions/account.js:114
const employeeRate = Math.max(payload.employeeContributionRate, 3);
// ./client/js/actions/account.js:115
const employerRate = Math.min(Math.max(payload.employerContributionRate, 3), employeeRate);
// ./client/js/actions/account.js:135
payload.oldContributionRate = Math.max(payload.oldContributionRate, 3);
// ./client/js/actions/account.js:136
payload.newContributionRate = Math.max(payload.newContributionRate, 3);
// ./client/js/actions/account.js:146
payload.oldContributionRate = Math.max(payload.oldContributionRate, 3);
// ./client/js/actions/account.js:147
payload.newContributionRate = Math.max(payload.newContributionRate, 3);
// ./client/js/actions/account.js:205
const employeeRate = Math.max(account.employeeContributionRateNew, 3);
// ./client/js/actions/account.js:206
const employerRate = Math.min(Math.max(account.employerMaximumRate, 3), employeeRate);
// ./client/js/actions/account.js:228
const employeeRate = Math.max(account.employeeContributionRateNew, 3);
// ./client/js/actions/account.js:229
const employerRate = Math.min(Math.max(account.employerMaximumRate, 3), employeeRate);
```
