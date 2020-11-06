module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@ts-utils(.*)$': '<rootDir>/dist/plugins/TS-lib-utils/index.js$1',
    '^@configs(.*)$': '<rootDir>/dist/configs/$1',
    '^@dist(.*)$': '<rootDir>/dist/$1',
  },
};