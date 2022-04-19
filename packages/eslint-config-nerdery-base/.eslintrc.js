module.exports = {
  rules: {
    'max-params': [2, 5], // Disallow more than 5 parameters
    'no-implicit-coercion': 2, // Disallow type conversion with shorter notations
    'class-methods-use-this': 0, // Allow class instance methods that don't use `this` to prevent unnecessary refactors
    // 'import/order': {} // TODO
    'import/prefer-default-export': 0, // Allow single named exports to prevent unnecessary refactors
    'arrow-body-style': 0, // Disabled. Just because you *can* make something a one-liner, doesn't mean you should.
    // 'prefer-destructuring': {} // TODO
    'no-continue': 0, // Allow continues. They can be used like an early return to increase readability.
    'no-plusplus': 0, // Allow ++ and --. The rationale for using this rule is that the operators are susceptible to automatic semicolon insertion issues, but that's an unlikely problem to run into.
    'object-curly-newline': 0, // Disabled to leave up to developer discretion
    'vars-on-top': 0, // Disabled because vars are disallowed so this check is superfluous.
    'arrow-parens': [2, 'as-needed'], // Require parens in arrow function arguments
    'camelcase': [2, { properties: 'always' }], // Require camelCase property names
    'newline-per-chained-call': [2, { // Require newline per chained method call
      ignoreChainWithDepth: 2,
    }],
    'spaced-comment': ['error', 'always', { // Require whitespace before comments
      line: {
        markers: ['/'],
        exceptions: ['-'],
      },
      block: {
        markers: ['/', '*'],
      },
    }],
    curly: 2, // Require curly brace conventions
    'dot-notation': [2, { // Require dot notation
      allowPattern: '^[a-z]+(_[a-z]+)+$',
    }],
    'array-bracket-newline': 0, // Leave up to developer discretion
    'array-element-newline': 0, // Leave up to developer discretion
    'function-call-argument-newline': 0, // Leave up to developer discretion
    'max-depth': [1, 4], // Warn when blocks are nested too deeply
    'max-lines': [1, 500], // Warn when files become too long
    'import/no-default-export': 2, // Mixing default and named exports is unnecessary and can be confusing. This is a contentious topic though. Feel free to override this in your own config.
    'import/dynamic-import-chunkname': 2, // TODO: Test this
    'complexity': [1, 20], // Warn when code becomes too complex
    'no-implicit-coercion': 2, // Disallows shorthand type conversions
    // 'no-invalid-this': {} // TODO
    // 'no-unreachable-loop': {} // TODO
    // 'no-restricted-exports': {} // TODO
    // 'sort-imports': {} // TODO
  },
};
