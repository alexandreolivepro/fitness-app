const {
  resolve
} = require('path');

module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setupJest.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/"
    ],
    "moduleNameMapper": {
      "^@Services/(.*)$": resolve(__dirname, './src/app/shared/services/$1'),
      "^@Features/(.*)$": resolve(__dirname, './src/app/features/$1'),
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$"
      }
    }
}