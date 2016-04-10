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

## Doing the kata

```sh
# Run the tests with a watcher
npm start
# Run the coverage
npm run coverage
open coverage/lcov-report/index.html
# Run the linting
npm run lint
```
