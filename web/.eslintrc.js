module.exports = {
	plugins: ['@typescript-eslint/eslint-plugin', 'react', 'prettier'],
	parser: '@typescript-eslint/parser',
	extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': ['error'],
		camelcase: [0, { properties: 'never' }],
		'@typescript-eslint/camelcase': [0, { properties: 'never' }],
		'react/prop-types': [0],
		'@typescript-eslint/no-use-before-define': [0],
		'@typescript-eslint/ban-ts-comment': [0, { properties: 'never' }],
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
