module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[jt]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2020',
        },
      },
    ],
  },
  moduleNameMapper: {
    // Jest can't resolve CSS or asset imports
    "^.+\\.(css|jpe?g|png|svg|webp)$": "<rootDir>/jest/emptyModule.ts",
  },
};
