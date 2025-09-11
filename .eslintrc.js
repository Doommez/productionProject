module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [0, 2],
        'react/jsx-indent-props': [0, 2],
        indent: [0, 2],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_'
            }
        ],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        quotes: ['error', 'single'],
        'linebreak-style': 0,
        'comma-dangle': ['error', 'never'],
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to']
        }],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100
        }],
        'react/prop-types': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off'
    },
    globals: {
        __IS_DEV: true
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ]
};

