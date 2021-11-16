/* eslint immutable/no-mutation: 0 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'immutable', 'prettier'],
    rules: {
        'immutable/no-mutation': 0,
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
