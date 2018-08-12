module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'const-case',
    'unicorn'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended',
    'plugin:ember-best-practices/recommended',
    'plugin:unicorn/recommended'
  ],
  globals: {
    '$': true,    
    'server': true,    
    'newrelic': true,
    'module': true,    
    'ga': true
  },
  rules: {
    'operator-linebreak': ['error', 'after'],
    'no-useless-escape': 'off',
    'const-case/uppercase': 'error',

    'capitalized-comments': ['error', 'always'],
    'no-inline-comments': 'error',

    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-nested-ternary': 'error',
    'no-negated-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',

    'nonblock-statement-body-position': ['error', 'beside'],
    'key-spacing': ['error', { 'mode': 'strict' }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'padded-blocks': ['error', 'never'],
    'lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true }
    ],
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': 'multiline-block-like', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'multiline-expression', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'let', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'let' },
      { 'blankLine': 'never', 'prev': 'let', 'next': 'let' },

      { 'blankLine': 'always', 'prev': '*', 'next': 'if' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'for' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'while' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'do' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'switch' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'try' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'throw' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
    ],
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': { 'minProperties': 3, 'consistent': true },
        'ObjectPattern': { 'minProperties': 3 },
        'ImportDeclaration': { 'minProperties': 3 },
        'ExportDeclaration': { 'minProperties': 3 }
      }
    ],

    // Ember-specific rules
    'ember-best-practices/no-attrs-snapshot': 'error',
    'ember-best-practices/no-attrs': 'error',
    'ember-best-practices/no-broken-super-chain': 'error',
    'ember-best-practices/no-lifecycle-events': 'error',
    'ember-best-practices/no-global-jquery': 'off', // Will be covered in `eslint-plugin-ember` below
    'ember-best-practices/no-observers': 'warn', // FIXME: change value to 'error' when observers have been removed
    'ember-best-practices/no-send-action': 'error',
    'ember-best-practices/no-side-effect-cp': 'error',
    'ember-best-practices/require-dependent-keys': 'error',

    'ember/alias-model-in-controller': 'error',
    'ember/new-module-imports': 'error',
    'ember/no-capital-letters-in-routes': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-empty-attrs': 'off',
    'ember/no-global-jquery': 'error',
    'ember/no-old-shims': 'error',
    'ember/no-side-effects': 'off',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/routes-segments-snake-case': 'error',
    'ember/use-brace-expansion': 'error',
    'ember/use-ember-get-and-set': 'error'
  }
};
