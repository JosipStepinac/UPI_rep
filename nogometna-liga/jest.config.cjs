module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}',
  //   '!src/**/*.test.{js,jsx}',
  //   '!src/index.js',
  //   '!src/reportWebVitals.js',
  //   '!**/node_modules/**'
  // ]
};

