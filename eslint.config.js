const react = require( 'eslint-plugin-react' );
const reactNative = require( 'eslint-plugin-react-native' );
const typescriptEslint = require( '@typescript-eslint/eslint-plugin' );
const typescriptParser = require( '@typescript-eslint/parser' );

module.exports = [
    {
        ignores: ['node_modules/**']
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                __DEV__: true,
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react,
            'react-native': reactNative,
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
            'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
            'semi': 'error',
            'indent': ['error', 4],
            'quotes': [1, 'single', { 'allowTemplateLiterals': true } ],
            'no-console': ['error'],
            'comma-spacing': ['error', { 'before': false, 'after': true } ],
            'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
            'keyword-spacing': [2, { 'before': true, 'after': true } ],
            'no-trailing-spaces': 'error',
            'space-before-blocks': 'error',
            'space-after-keywords': 'off',
            'object-curly-spacing': ['error', 'always'],
            'newline-before-return': 'error',
            // 'space-in-parens': ['error', 'always'],
            'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' } ],
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            // "@typescript-eslint/type-annotation-spacing": [
            //   "error",
            //   {
            //     "before": true,
            //     "after": true,
            //     "overrides": {
            //       "colon": {
            //         "before": false,
            //         "after": true
            //       }
            //     }
            //   }
            // ],
            'react/jsx-tag-spacing': ['error', {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never',
                'beforeClosing': 'never'
            }]
        },
    },
];
