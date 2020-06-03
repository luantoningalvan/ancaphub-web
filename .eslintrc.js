module.exports = {
  extends: [
    'airbnb', 
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react-hooks'
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    // these ones are for avoiding conflicts with prettier
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-underscore-dangle': 'off',
    // default export is javascriptism, do not require it always!
    'import/prefer-default-export': 'off'
  },
};