module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
  },
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: 'coverage'
};
