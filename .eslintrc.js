module.exports = {
  env: {
    // browser: true,
    // es6: true,
    // node: true,
    // 'react-native/react-native': true,
    // 'jest/globals': true,
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-module': {},
      typescript: {},
    },
    'react-native/style-sheet-object-names': ['EStyleSheet'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 8,
  //   sourceType: 'module',
  // },
  // parser: 'babel-eslint',
  // parser: '@babel/eslint-parser',
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    'jest',
    'import',
    'prettier',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off', //
    eqeqeq: ['error', 'always'],
    'import/no-unresolved': ['error', {commonjs: true, caseSensitive: true}],
    'no-console': 2,
    'promise/prefer-await-to-then': 2,
    'promise/no-nesting': 2,
    'promise/prefer-await-to-callbacks': 2,
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'ignore'},
    ],
    'react/prop-types': ['error', {ignore: ['navigation', 'theme']}],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    // 'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 1,
    'require-await': 2,
    'react/forbid-prop-types': [0, {forbid: []}],
    'react/jsx-closing-bracket-location': [
      1,
      {selfClosing: 'tag-aligned', nonEmpty: 'after-props'},
    ],
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', 'ts', 'tsx']},
    ],
    'react/jsx-props-no-spreading': [0, 0],
    'react/prefer-stateless-function': [2, {ignorePureComponents: true}],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        semi: true,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
  },
};
