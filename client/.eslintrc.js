module.exports = {
	"parser": "babel-eslint",
	"plugins": ["react", "jest"],
	"extends": ["airbnb", "plugin:react/recommended", "plugin:jest/recommended"],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true,
		"jest/globals": true
	},
	"rules": {
		"indent": [2, 'tab'],
		"linebreak-style": 0,
		"comma-dangle": 0,
		"no-tabs": 0,
		"no-trailing-spaces": 0,
		"import/prefer-default-export": 0,
		"template-curly-spacing": 0,
		"arrow-parens": 0,
		// "object-curly-newline": ["error", {
		// 	"ObjectExpression": "always",
		// 	"ObjectPattern": "never"
		// }],
		// "no-unused-expressions": [
		// 	"error",
		// 	{ "allowTaggedTemplates": true }
		// ]

        // // React's
        "react/jsx-indent": [2, 'tab'],
		"react/jsx-indent-props": [2, 'tab'],
		"react/forbid-prop-types": 0,
		"react/prefer-stateless-function": 1,
		"react/prop-types": 2,

		// Jest
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error"
	}
};
