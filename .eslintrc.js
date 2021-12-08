module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-named-as-default': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/order': 1,
    '"max-len': [0, 160, 2, { ignoreUrls: true }]
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
