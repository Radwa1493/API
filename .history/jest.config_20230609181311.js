module.exports = {
    // other Jest configuration options...
    coverageReporters: ['json', 'lcov', 'text', 'html'],
    coverageDirectory: '<rootDir>/coverage',
    reporters: [
      'default',
      [
        'istanbul',
        {
          reports: ['lcov', 'text-summary'],
        },
      ],
    ],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.{js,jsx}',
      '!**/node_modules/**',
    ],
  };
  