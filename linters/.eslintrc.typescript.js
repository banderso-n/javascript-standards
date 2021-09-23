module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    // Load <rootdir>/tsconfig.json to eslint
    // https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-571597574
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {

    // Add .ts and .tsx to Airbnb's import/extensions config
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Rules that exist in vanilla eslint but have typescript-specific replacements
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,

    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,

    semi: 0,
    '@typescript-eslint/semi': [2, 'always'],

    // Rules to guard against potentially dangerous or confusing practices
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/ban-types': 2,

    // Rules to enforce consistent formatting
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          // Prefixing interfaces with `I` is widely considered a form of Hungarian notation
          // and is generally avoided. https://stackoverflow.com/a/41967120
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],

    // These rules can be turned off because typescript already checks for them
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,

    // These rules can be computationally expensive. If linting is becoming slow, consider
    // moving them to a separate script or tweaking their settings.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    'import/no-named-as-default': 2,
    'import/no-cycle': [
      2,
      {
        maxDepth: '∞',

        // If you don't need cycle detection to expand to external modules,
        // override this to true to speed up linting.
        ignoreExternal: false,
      },
    ],
  },
};
