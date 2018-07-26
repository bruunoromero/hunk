## Description

Hunk is aggregator of some useful apps focused on productivity that I frequently need bundled in one app, ex.: Group based lists, Package tracker and etc.

## Installation

```bash
$ npm install
```

## Running the app

Firstly, get the firebase admin credentials and put into a file named `serviceAccountKey.json` at the root of the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Hunk is [MIT licensed](LICENSE).
