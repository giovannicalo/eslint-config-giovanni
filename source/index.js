module.exports = {
	env: { es2020: true },
	overrides: [{
		env: { jest: true },
		files: ["*.spec.js"]
	}],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: true,
			jsx: false
		},
		ecmaVersion: 11,
		sourceType: "module"
	},
	plugins: ["babel", "import", "jsdoc", "promise", "unicorn"],
	reportUnusedDisableDirectives: true,
	rules: {
		"accessor-pairs": [2, {
			enforceForClassMembers: true,
			getWithoutSet: false,
			setWithoutGet: true
		}],
		"array-bracket-newline": 0,
		"array-bracket-spacing": [2, "never", {
			arraysInArrays: false,
			objectsInArrays: false,
			singleValue: false
		}],
		"array-callback-return": [2, {
			allowImplicit: true,
			checkForEach: true
		}],
		"array-element-newline": 0,
		"arrow-body-style": [2, "always"],
		"arrow-parens": [2, "always"],
		"arrow-spacing": [2, {
			after: true,
			before: true
		}],
		"babel/camelcase": [2, {
			ignoreDestructuring: false,
			properties: "always"
		}],
		"babel/new-cap": 0,
		"babel/no-invalid-this": 2,
		"babel/no-unused-expressions": [2, {
			allowShortCircuit: true,
			allowTernary: true
		}],
		"babel/object-curly-spacing": [2, "always", {
			arraysInObjects: true,
			objectsInObjects: true
		}],
		"babel/quotes": [2, "double", {
			avoidEscape: false
		}],
		"babel/semi": [2, "always"],
		"babel/valid-typeof": 0,
		"block-scoped-var": 2,
		"block-spacing": [2, "always"],
		"brace-style": [2, "1tbs", {
			allowSingleLine: false
		}],
		camelcase: 0,
		"capitalized-comments": [2, "always", {
			ignoreConsecutiveComments: false,
			ignoreInlineComments: false
		}],
		"class-methods-use-this": 0,
		"comma-dangle": [2, "never"],
		"comma-spacing": [2, {
			after: true,
			before: false
		}],
		"comma-style": [2, "last", {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				NewExpression: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false
			}
		}],
		complexity: 0,
		"computed-property-spacing": [2, "never", {
			enforceForClassMembers: true
		}],
		"consistent-return": [2, {
			treatUndefinedAsUnspecified: false
		}],
		"consistent-this": [2, "self"],
		"constructor-super": 2,
		curly: [2, "all"],
		"default-case": 0,
		"default-case-last": 2,
		"default-param-last": 2,
		"dot-location": [2, "property"],
		"dot-notation": [2, { allowKeywords: true }],
		"eol-last": [2, "always"],
		eqeqeq: [2, "always"],
		"for-direction": 2,
		"func-call-spacing": [2, "never"],
		"func-name-matching": [2, "always", {
			considerPropertyDescriptor: true,
			includeCommonJSModuleExports: false
		}],
		"func-names": [2, "never"],
		"func-style": [1, "expression", {
			allowArrowFunctions: true
		}],
		"function-call-argument-newline": [2, "consistent"],
		"function-paren-newline": [2, "multiline-arguments"],
		"generator-star-spacing": [2, {
			after: true,
			before: true
		}],
		"getter-return": [2, {
			allowImplicit: true
		}],
		"grouped-accessor-pairs": [2, "getBeforeSet"],
		"guard-for-in": 1,
		"id-denylist": 0,
		"id-length": [1, {
			max: 30,
			min: 1,
			properties: "always"
		}],
		"id-match": 0,
		"implicit-arrow-linebreak": [2, "beside"],
		"import/default": 2,
		"import/dynamic-import-chunkname": 0,
		"import/export": 2,
		"import/exports-last": 2,
		"import/extensions": [2, "never"],
		"import/first": [2, "absolute-first"],
		"import/group-exports": 0,
		"import/max-dependencies": 0,
		"import/named": 2,
		"import/namespace": [2, {
			allowComputed: true
		}],
		"import/newline-after-import": [2, { count: 1 }],
		"import/no-absolute-path": 2,
		"import/no-amd": 2,
		"import/no-anonymous-default-export": 0,
		"import/no-commonjs": 0,
		"import/no-cycle": [2, {
			amd: true,
			commonjs: true,
			ignoreExternal: false,
			maxDepth: 1
		}],
		"import/no-default-export": 0,
		"import/no-deprecated": 0,
		"import/no-duplicates": [2, {
			considerQueryString: false
		}],
		"import/no-dynamic-require": 0,
		"import/no-extraneous-dependencies": [2, {
			bundledDependencies: true,
			devDependencies: true,
			optionalDependencies: true,
			peerDependencies: true
		}],
		"import/no-internal-modules": 0,
		"import/no-mutable-exports": 2,
		"import/no-named-as-default": 2,
		"import/no-named-as-default-member": 0,
		"import/no-named-default": 2,
		"import/no-named-export": 0,
		"import/no-namespace": 0,
		"import/no-nodejs-modules": 0,
		"import/no-relative-parent-imports": 0,
		"import/no-restricted-paths": 0,
		"import/no-self-import": 2,
		"import/no-unassigned-import": 0,
		"import/no-unresolved": [2, {
			amd: true,
			caseSensitive: true,
			commonjs: true
		}],
		"import/no-unused-modules": 0,
		"import/no-useless-path-segments": [2, {
			noUselessIndex: true
		}],
		"import/no-webpack-loader-syntax": 2,
		"import/order": [2, {
			alphabetize: {
				caseInsensitive: false,
				order: "asc"
			},
			groups: [
				"builtin",
				"external",
				["index", "internal", "parent", "sibling"]
			],
			"newlines-between": "always"
		}],
		"import/prefer-default-export": 2,
		"import/unambiguous": 0,
		indent: [2, "tab", {
			ArrayExpression: 1,
			CallExpression: {
				arguments: 1
			},
			FunctionDeclaration: {
				body: 1,
				parameters: 1
			},
			FunctionExpression: {
				body: 1,
				parameters: 1
			},
			ImportDeclaration: 1,
			MemberExpression: 1,
			ObjectExpression: 1,
			SwitchCase: 1,
			VariableDeclarator: 0,
			flatTernaryExpressions: false,
			ignoreComments: false,
			ignoredNodes: [],
			offsetTernaryExpressions: false,
			outerIIFEBody: 1
		}],
		"init-declarations": [2, "always"],
		"jsdoc/check-access": 2,
		"jsdoc/check-alignment": 2,
		"jsdoc/check-examples": 2,
		"jsdoc/check-indentation": 2,
		"jsdoc/check-param-names": [2, {
			allowExtraTrailingParamDocs: false,
			checkRestProperty: false,
			enableFixer: true
		}],
		"jsdoc/check-property-names": 2,
		"jsdoc/check-syntax": 2,
		"jsdoc/check-tag-names": 2,
		"jsdoc/check-types": [2, { noDefaults: true }],
		"jsdoc/check-values": 2,
		"jsdoc/empty-tags": 2,
		"jsdoc/implements-on-classes": 2,
		"jsdoc/match-description": [2, {
			matchDescription: "[A-Z].*"
		}],
		"jsdoc/newline-after-description": [2, "always"],
		"jsdoc/no-bad-blocks": 2,
		"jsdoc/no-defaults": 0,
		"jsdoc/no-types": 0,
		"jsdoc/no-undefined-types": 2,
		"jsdoc/require-description": 0,
		"jsdoc/require-description-complete-sentence": [2, {
			abbreviations: ["e.g.", "i.e."],
			newlineBeforeCapsAssumesBadSentenceEnd: false // eslint-disable-line id-length
		}],
		"jsdoc/require-example": 0,
		"jsdoc/require-file-overview": 0,
		"jsdoc/require-hyphen-before-param-description": [2, "always", {
			tags: { "*": "always" }
		}],
		"jsdoc/require-jsdoc": 0,
		"jsdoc/require-param": [2, {
			autoIncrementBase: 0,
			checkConstructors: true,
			checkGetters: true,
			checkRestProperty: true,
			checkSetters: true,
			enableFixer: true,
			enableRestElementFixer: true,
			enableRootFixer: true
		}],
		"jsdoc/require-param-description": 2,
		"jsdoc/require-param-name": 2,
		"jsdoc/require-param-type": 2,
		"jsdoc/require-property": 0,
		"jsdoc/require-property-description": 2,
		"jsdoc/require-property-name": 2,
		"jsdoc/require-property-type": 2,
		"jsdoc/require-returns": [2, {
			checkConstructors: true,
			checkGetters: true,
			forceRequireReturn: true,
			forceReturnsWithAsync: true
		}],
		"jsdoc/require-returns-check": 0,
		"jsdoc/require-returns-description": 2,
		"jsdoc/require-returns-type": 2,
		"jsdoc/require-throws": 0,
		"jsdoc/valid-types": [2, {
			allowEmptyNamepaths: true
		}],
		"jsx-quotes": [2, "prefer-double"],
		"key-spacing": [2, {
			afterColon: true,
			beforeColon: false,
			mode: "strict"
		}],
		"keyword-spacing": [2, {
			after: true,
			before: true
		}],
		"line-comment-position": 0,
		"linebreak-style": [2, "unix"],
		"lines-around-comment": 0,
		"lines-between-class-members": [2, "always", {
			exceptAfterSingleLine: false
		}],
		"max-classes-per-file": [2, 1],
		"max-depth": 0,
		"max-len": 0,
		"max-lines": 0,
		"max-lines-per-function": 0,
		"max-nested-callbacks": 0,
		"max-params": 0,
		"max-statements": 0,
		"max-statements-per-line": [2, { max: 1 }],
		"multiline-comment-style": 0,
		"multiline-ternary": [2, "never"],
		"new-cap": [2, {
			capIsNew: false,
			newIsCap: true,
			properties: true
		}],
		"new-parens": [2, "always"],
		"newline-per-chained-call": 0,
		"no-alert": 2,
		"no-array-constructor": 2,
		"no-async-promise-executor": 2,
		"no-await-in-loop": 2,
		"no-bitwise": 0,
		"no-buffer-constructor": 2,
		"no-caller": 2,
		"no-case-declarations": 2,
		"no-class-assign": 2,
		"no-compare-neg-zero": 2,
		"no-cond-assign": [2, "always"],
		"no-confusing-arrow": 0,
		"no-console": 0,
		"no-const-assign": 2,
		"no-constant-condition": [2, {
			checkLoops: true
		}],
		"no-constructor-return": 2,
		"no-continue": 0,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 2,
		"no-div-regex": 0,
		"no-dupe-args": 2,
		"no-dupe-class-members": 2,
		"no-dupe-else-if": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-duplicate-imports": [2, {
			includeExports: true
		}],
		"no-else-return": 0,
		"no-empty": [2, {
			allowEmptyCatch: false
		}],
		"no-empty-character-class": 2,
		"no-empty-function": 2,
		"no-empty-pattern": 2,
		"no-eq-null": 2,
		"no-eval": [2, {
			allowIndirect: false
		}],
		"no-ex-assign": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-extra-boolean-cast": [2, {
			enforceForLogicalOperands: true
		}],
		"no-extra-label": 2,
		"no-extra-parens": [2, "all", {
			conditionalAssign: true,
			enforceForArrowConditionals: true,
			enforceForFunctionPrototypeMethods: true, // eslint-disable-line id-length
			enforceForNewInMemberExpressions: true, // eslint-disable-line id-length
			enforceForSequenceExpressions: true,
			ignoreJSX: "none",
			nestedBinaryExpressions: true,
			returnAssign: true
		}],
		"no-extra-semi": 2,
		"no-fallthrough": 1,
		"no-floating-decimal": 2,
		"no-func-assign": 2,
		"no-global-assign": 2,
		"no-implicit-coercion": 0,
		"no-implicit-globals": [2, {
			lexicalBindings: true
		}],
		"no-implied-eval": 2,
		"no-import-assign": 2,
		"no-inline-comments": 0,
		"no-inner-declarations": [2, "both"],
		"no-invalid-regexp": 2,
		"no-invalid-this": 0,
		"no-irregular-whitespace": [2, {
			skipComments: false,
			skipRegExps: false,
			skipStrings: false,
			skipTemplates: false
		}],
		"no-iterator": 2,
		"no-label-var": 2,
		"no-labels": [2, {
			allowLoop: false,
			allowSwitch: false
		}],
		"no-lone-blocks": 2,
		"no-lonely-if": 2,
		"no-loop-func": 2,
		"no-loss-of-precision": 2,
		"no-magic-numbers": 0,
		"no-misleading-character-class": 2,
		"no-mixed-operators": 0,
		"no-mixed-spaces-and-tabs": 2,
		"no-multi-assign": 2,
		"no-multi-spaces": [2, {
			exceptions: { Property: false },
			ignoreEOLComments: false
		}],
		"no-multi-str": 2,
		"no-multiple-empty-lines": [2, {
			max: 1,
			maxBOF: 0,
			maxEOF: 1
		}],
		"no-negated-condition": 0,
		"no-nested-ternary": 0,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-object": 2,
		"no-new-symbol": 2,
		"no-new-wrappers": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-param-reassign": [1, { props: true }],
		"no-plusplus": 0,
		"no-promise-executor-return": 2,
		"no-proto": 2,
		"no-prototype-builtins": 0,
		"no-redeclare": [2, {
			builtinGlobals: false
		}],
		"no-regex-spaces": 2,
		"no-restricted-exports": 0,
		"no-restricted-globals": 0,
		"no-restricted-imports": 0,
		"no-restricted-properties": 0,
		"no-restricted-syntax": 0,
		"no-return-assign": [2, "always"],
		"no-return-await": 2,
		"no-script-url": 2,
		"no-self-assign": [2, { props: true }],
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-setter-return": 2,
		"no-shadow": 0,
		"no-shadow-restricted-names": 2,
		"no-sparse-arrays": 2,
		"no-tabs": [2, {
			allowIndentationTabs: true
		}],
		"no-template-curly-in-string": 2,
		"no-ternary": 0,
		"no-this-before-super": 2,
		"no-throw-literal": 2,
		"no-trailing-spaces": [2, {
			ignoreComments: false,
			skipBlankLines: false
		}],
		"no-undef": [2, { typeof: true }],
		"no-undef-init": 2,
		"no-undefined": 2,
		"no-underscore-dangle": 0,
		"no-unexpected-multiline": 2,
		"no-unmodified-loop-condition": 2,
		"no-unneeded-ternary": [2, {
			defaultAssignment: false
		}],
		"no-unreachable": 2,
		"no-unreachable-loop": [2, { ignore: [] }],
		"no-unsafe-finally": 2,
		"no-unsafe-negation": [2, {
			enforceForOrderingRelations: true
		}],
		"no-unused-labels": 2,
		"no-unused-vars": [2, {
			args: "after-used",
			caughtErrors: "none",
			vars: "all"
		}],
		"no-use-before-define": [2, {
			classes: true,
			functions: false,
			variables: true
		}],
		"no-useless-backreference": 2,
		"no-useless-call": 2,
		"no-useless-catch": 2,
		"no-useless-computed-key": [2, {
			enforceForClassMembers: true
		}],
		"no-useless-concat": 2,
		"no-useless-constructor": 2,
		"no-useless-escape": 2,
		"no-useless-rename": [2, {
			ignoreDestructuring: false,
			ignoreExport: false,
			ignoreImport: false
		}],
		"no-useless-return": 2,
		"no-var": 1,
		"no-void": 0,
		"no-warning-comments": [1, {
			location: "start",
			terms: ["fixme", "todo"]
		}],
		"no-whitespace-before-property": 2,
		"no-with": 2,
		"nonblock-statement-body-position": 0,
		"object-curly-newline": 0,
		"object-curly-spacing": 0,
		"object-property-newline": [2, {
			allowAllPropertiesOnSameLine: true
		}],
		"object-shorthand": [2, "always", {
			avoidExplicitReturnArrows: true,
			avoidQuotes: false,
			ignoreConstructors: false
		}],
		"one-var": [2, "never"],
		"one-var-declaration-per-line": 0,
		"operator-assignment": [2, "always"],
		"operator-linebreak": [2, "none"],
		"padded-blocks": [2, {
			blocks: "never",
			classes: "always",
			switches: "never"
		}, { allowSingleLineBlocks: false }],
		"padding-line-between-statements": 0,
		"prefer-arrow-callback": [2, {
			allowNamedFunctions: false,
			allowUnboundThis: true
		}],
		"prefer-const": [2, {
			destructuring: "any",
			ignoreReadBeforeAssign: false
		}],
		"prefer-destructuring": 0,
		"prefer-exponentiation-operator": 2,
		"prefer-named-capture-group": 2,
		"prefer-numeric-literals": 2,
		"prefer-object-spread": 2,
		"prefer-promise-reject-errors": [2, {
			allowEmptyReject: false
		}],
		"prefer-regex-literals": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"promise/always-return": 2,
		"promise/avoid-new": 0,
		"promise/catch-or-return": 2,
		"promise/no-callback-in-promise": 0,
		"promise/no-native": 0,
		"promise/no-nesting": 0,
		"promise/no-new-statics": 2,
		"promise/no-promise-in-callback": 0,
		"promise/no-return-in-finally": 2,
		"promise/no-return-wrap": 2,
		"promise/param-names": 2,
		"promise/prefer-await-to-callbacks": 0,
		"promise/prefer-await-to-then": 0,
		"promise/valid-params": 2,
		"quote-props": [2, "as-needed"],
		radix: [2, "as-needed"],
		"require-atomic-updates": 2,
		"require-await": 2,
		"require-jsdoc": 0,
		"require-unicode-regexp": 2,
		"require-yield": 2,
		"rest-spread-spacing": [2, "never"],
		semi: 0,
		"semi-spacing": [2, {
			after: true,
			before: false
		}],
		"semi-style": [2, "last"],
		"sort-imports": [2, {
			ignoreCase: false,
			ignoreDeclarationSort: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
		}],
		"sort-keys": [2, "asc", {
			caseSensitive: true,
			minKeys: 2,
			natural: true
		}],
		"sort-vars": [2, { ignoreCase: false }],
		"space-before-blocks": [2, "always"],
		"space-before-function-paren": [2, {
			anonymous: "always",
			asyncArrow: "always",
			named: "never"
		}],
		"space-in-parens": [2, "never"],
		"space-infix-ops": [2, {
			int32Hint: false
		}],
		"space-unary-ops": [2, {
			nonwords: false,
			words: true
		}],
		"spaced-comment": [2, "always"],
		strict: [2, "global"],
		"switch-colon-spacing": [2, {
			after: true,
			before: false
		}],
		"symbol-description": 2,
		"template-curly-spacing": [2, "never"],
		"unicode-bom": [2, "never"],
		"unicorn/better-regex": [2, {
			sortCharacterClasses: true
		}],
		"unicorn/catch-error-name": [2, { name: "error" }],
		"unicorn/consistent-function-scoping": 2,
		"unicorn/custom-error-definition": 2,
		"unicorn/error-message": 2,
		"unicorn/escape-case": 2,
		"unicorn/expiring-todo-comments": 0,
		"unicorn/explicit-length-check": 0,
		"unicorn/filename-case": [2, { case: "kebabCase" }],
		"unicorn/import-index": 2,
		"unicorn/new-for-builtins": 2,
		"unicorn/no-abusive-eslint-disable": 2,
		"unicorn/no-array-instanceof": 2,
		"unicorn/no-console-spaces": 2,
		"unicorn/no-fn-reference-in-iterator": 0,
		"unicorn/no-for-loop": 2,
		"unicorn/no-hex-escape": 2,
		"unicorn/no-keyword-prefix": 0,
		"unicorn/no-nested-ternary": 0,
		"unicorn/no-new-buffer": 2,
		"unicorn/no-null": 0,
		"unicorn/no-object-as-default-parameter": 2,
		"unicorn/no-process-exit": 0,
		"unicorn/no-reduce": 0,
		"unicorn/no-unreadable-array-destructuring": 0,
		"unicorn/no-unsafe-regex": 0,
		"unicorn/no-unused-properties": 2,
		"unicorn/no-useless-undefined": 2,
		"unicorn/no-zero-fractions": 2,
		"unicorn/number-literal-case": 2,
		"unicorn/prefer-add-event-listener": 2,
		"unicorn/prefer-array-find": 2,
		"unicorn/prefer-dataset": 2,
		"unicorn/prefer-event-key": 2,
		"unicorn/prefer-flat-map": 2,
		"unicorn/prefer-includes": 2,
		"unicorn/prefer-modern-dom-apis": 2,
		"unicorn/prefer-negative-index": 2,
		"unicorn/prefer-node-append": 2,
		"unicorn/prefer-node-remove": 2,
		"unicorn/prefer-number-properties": 0,
		"unicorn/prefer-optional-catch-binding": 2,
		"unicorn/prefer-query-selector": 2,
		"unicorn/prefer-reflect-apply": 0,
		"unicorn/prefer-replace-all": 2,
		"unicorn/prefer-set-has": 1,
		"unicorn/prefer-spread": 2,
		"unicorn/prefer-starts-ends-with": 2,
		"unicorn/prefer-string-slice": 2,
		"unicorn/prefer-text-content": 2,
		"unicorn/prefer-trim-start-end": 2,
		"unicorn/prefer-type-error": 2,
		"unicorn/prevent-abbreviations": 0,
		"unicorn/string-content": 0,
		"unicorn/throw-new-error": 2,
		"use-isnan": [2, {
			enforceForIndexOf: true,
			enforceForSwitchCase: true
		}],
		"valid-jsdoc": 0,
		"valid-typeof": [2, {
			requireStringLiterals: true
		}],
		"vars-on-top": 0,
		"wrap-iife": [2, "inside", {
			functionPrototypeMethods: true
		}],
		"wrap-regex": 0,
		"yield-star-spacing": [2, {
			after: true,
			before: true
		}],
		yoda: [2, "never", {
			exceptRange: false,
			onlyEquality: false
		}]
	},
	settings: {
		jsdoc: {
			mode: "jsdoc",
			preferredTypes: {
				array: "Array",
				bigint: "BigInt",
				boolean: "Boolean",
				date: "Date",
				function: "Function",
				number: "Number",
				object: "Object",
				regexp: "RegExp",
				string: "String"
			},
			tagNamePreference: {
				arg: "param",
				argument: "param",
				augments: "extends",
				const: "constant",
				constructor: "class",
				defaultvalue: "default",
				desc: "description",
				exception: "throws",
				fileoverview: "file",
				fires: "emits",
				func: "function",
				host: "external",
				method: "function",
				overview: "file",
				prop: "property",
				return: "returns",
				var: "member",
				virtual: "abstract",
				yield: "yields"
			}
		}
	}
};
