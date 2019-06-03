module.exports = {
    roots: ['<rootDir>/test'],
    setupFiles: ['./test/enzyme.setup.js'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleDirectories: [
        'test',
        'node_modules',
    ],
    moduleFileExtensions: ['css', 'scss', 'js', 'json', 'jsx'],
    transformIgnorePatterns: [
        '/node_modules/(?!test-component).+\\.js$',
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
};
