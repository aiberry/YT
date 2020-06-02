module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'class-methods-use-this': 0,
    'no-console': 'warn',
    'no-eval': 'error',
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [1, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'max-len': [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    'operator-linebreak': [2, 'after'],
    'consistent-return': 0,

    'prefer-destructuring': [
      2,
      { array: false, object: false },
      { enforceForRenamedProperties: false }
    ],

    'function-paren-newline': 0,
    'no-plusplus': 1,
    'no-param-reassign': 1,
    'no-mixed-operators': 1,
    'no-restricted-syntax': 1,
    'valid-jsdoc': [
      2,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ]
  }
};
