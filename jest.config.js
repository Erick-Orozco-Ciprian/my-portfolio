module.exports = {
    // Specify the test environment (e.g., 'jsdom' for browser-like environment)
    testEnvironment: 'jsdom',
  
    // File extensions Jest should look for
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
    // Transform files with `ts-jest` for TypeScript support
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  
    // Match test files (files ending in .test.tsx, .test.ts, etc.)
    testMatch: ['**/?(*.)+(spec|test).(ts|tsx)'],
  
    // Setup files to run before each test
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    // setupFilesAfterEnv: [
    //     "<rootDir>/support/setupTests.js"
    //  ],
  
    // Module name mappings (useful for aliases in Webpack or TypeScript)
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Example: Map @/ to src/
    },
  
    // Collect code coverage information
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  };

 