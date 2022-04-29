module.exports = {
  rules: {
    'max-params': [2, 5], // Disallow more than 5 parameters
    'no-implicit-coercion': 2, // Disallow type conversion with shorter notations
    'class-methods-use-this': 0, // Allow class instance methods that don't use `this` to prevent unnecessary refactors
    'arrow-body-style': 0, // Disabled. Just because you *can* make something a one-liner, doesn't mean you should.
    'prefer-destructuring': ['error', { // Only prefer destructuring for `const { a } = obj;` (instead of `const a = obj.a`). Arrays and reassignments are left up to developer discretion.
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'no-continue': 0, // Allow continues. They can be used like an early return to increase readability.
    'no-plusplus': 0, // Allow ++ and --. The rationale for using this rule is that the operators are susceptible to automatic semicolon insertion issues, but that's an unlikely problem to run into.
    'object-curly-newline': 0, // Disabled to leave up to developer discretion
    'vars-on-top': 0, // Disabled because vars are disallowed so this check is superfluous
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
    'complexity': [1, 20], // Warn when code becomes too complex
    'no-implicit-coercion': 2, // Disallow shorthand type conversions

    'import/prefer-default-export': 0, // Allow single named exports to prevent unnecessary refactors
    'import/no-default-export': 2, // Mixing default and named exports is unnecessary and can be confusing. This is a contentious topic though. Feel free to override this in your own config.
    'import/dynamic-import-chunkname': 2, // If you're not using webpack or don't care about dynamically imported modules' filenames, feel free to disable this

    // By default, we enforce sorting imports to simplify git history and make it easier when scanning for a specific import.
    // It shouldn't cause too much trouble since it's auto-fixable, but if you find this to be more trouble than it's worth, feel free to disable these.
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'sort-imports': ['error', {
      ignoreDeclarationSort: true, // handled by import/order
      ignoreMemberSort: false,
    }],
  },
};
