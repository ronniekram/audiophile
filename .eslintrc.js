module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	extends: [`@actualsize/eslint-config/configs/ts-react`],
	parserOptions: {
		project: `./tsconfig.json`,
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": `off`,
		"react-hooks/exhaustive-deps": `off`,
		"unicorn/filename-case": [
			`error`,
			{
				case: `kebabCase`,
			},
		],
		"jsx-a11y/label-has-associated-control": [
			`error`,
			{
				assert: `nesting`,
			},
		],
		"unicorn/no-array-for-each": `off`,
		"import/no-extraneous-dependencies": `off`,
		"react/no-unescaped-entities": `off`,
		"unicorn/no-null": `off`,
		"no-implied-eval": `off`,
		"@typescript-eslint/no-implied-eval": `off`,
		"unicorn/no-array-reduce": `off`,
		"unicorn/no-array-callback-reference": `off`,
		"default-case": `off`,
		"no-restricted-syntax": `off`,
		"no-secrets/no-secrets": `off`,
		"unicorn/no-array-push-push": `off`,
		"unicorn/prefer-module": `off`,
		"unicorn/numeric-separators-style": `off`,
	},
};
