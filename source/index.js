const jest = require("./jest");

const configuration = {
	env: {
		commonjs: true,
		es2024: true
	},
	overrides: [jest],
	parser: "@babel/eslint-parser",
	parserOptions: {
		allowImportExportEverywhere: false,
		ecmaFeatures: { globalReturn: false },
		requireConfigFile: false,
		sourceType: "module"
	},
	plugins: [
		"@babel",
		"@stylistic",
		"import",
		"jest",
		"jsdoc",
		"promise",
		"unicorn"
	],
	reportUnusedDisableDirectives: true,
	rules: {
		"@babel/new-cap": ["error", {
			capIsNew: false,
			newIsCap: true,
			properties: true
		}],
		"@babel/no-invalid-this": "error",
		"@babel/no-undef": ["error", { typeof: true }],
		"@babel/no-unused-expressions": ["error", {
			allowShortCircuit: true,
			allowTaggedTemplates: true,
			allowTernary: true,
			enforceForJSX: true
		}],
		"@babel/object-curly-spacing": ["error", "always", {
			arraysInObjects: true,
			objectsInObjects: true
		}],
		"@babel/semi": ["error", "always", {
			omitLastInOneLineBlock: false,
			omitLastInOneLineClassBody: false
		}],
		"accessor-pairs": "off",
		"@stylistic/array-bracket-newline": "off",
		"@stylistic/array-bracket-spacing": ["error", "never", {
			arraysInArrays: false,
			objectsInArrays: false,
			singleValue: false
		}],
		"array-callback-return": ["error", {
			allowImplicit: true,
			allowVoid: false,
			checkForEach: true
		}],
		"@stylistic/array-element-newline": "off",
		"arrow-body-style": ["error", "always"],
		"@stylistic/arrow-parens": ["error", "always"],
		"@stylistic/arrow-spacing": ["error", {
			after: true,
			before: true
		}],
		"block-scoped-var": "error",
		"@stylistic/block-spacing": ["error", "always"],
		"@stylistic/brace-style": ["error", "1tbs", {
			allowSingleLine: false
		}],
		camelcase: ["error", {
			ignoreDestructuring: false,
			ignoreGlobals: false,
			ignoreImports: true,
			properties: "always"
		}],
		"capitalized-comments": ["error", "always", {
			ignoreConsecutiveComments: false,
			ignoreInlineComments: false
		}],
		"class-methods-use-this": ["error", {
			enforceForClassFields: true,
			exceptMethods: []
		}],
		"@stylistic/comma-dangle": ["error", "never"],
		"@stylistic/comma-spacing": ["error", {
			after: true,
			before: false
		}],
		"@stylistic/comma-style": ["error", "last", {
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
		complexity: "off",
		"@stylistic/computed-property-spacing": ["error", "never", {
			enforceForClassMembers: true
		}],
		"consistent-return": ["error", {
			treatUndefinedAsUnspecified: false
		}],
		"consistent-this": ["error", "self"],
		"constructor-super": "error",
		curly: ["error", "all"],
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"@stylistic/dot-location": ["error", "property"],
		"dot-notation": ["error", { allowKeywords: true }],
		"@stylistic/eol-last": ["error", "always"],
		eqeqeq: ["error", "always"],
		"for-direction": "error",
		"@stylistic/function-call-spacing": ["error", "never"],
		"func-name-matching": ["error", "always", {
			considerPropertyDescriptor: true,
			includeCommonJSModuleExports: false
		}],
		"func-names": ["error", "never"],
		"func-style": ["warn", "expression", {
			allowArrowFunctions: true
		}],
		"@stylistic/function-call-argument-newline": ["error", "consistent"],
		"@stylistic/function-paren-newline": ["error", "multiline-arguments"],
		"@stylistic/generator-star-spacing": ["error", {
			after: true,
			before: true
		}],
		"getter-return": ["error", {
			allowImplicit: true
		}],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "warn",
		"id-denylist": "off",
		"id-length": ["warn", {
			max: 30,
			min: 1,
			properties: "always"
		}],
		"id-match": "off",
		"@stylistic/implicit-arrow-linebreak": ["error", "beside"],
		"import/consistent-type-specifier-style": "off",
		"import/default": "error",
		"import/dynamic-import-chunkname": "off",
		"import/export": "error",
		"import/exports-last": "error",
		"import/extensions": ["error", "never"],
		"import/first": ["error", "absolute-first"],
		"import/group-exports": "off",
		"import/max-dependencies": "off",
		"import/named": "error",
		"import/namespace": ["error", {
			allowComputed: true
		}],
		"import/newline-after-import": ["error", {
			considerComments: true,
			count: 1,
			exactCount: true
		}],
		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": ["error", {
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowArray: false,
			allowArrowFunction: false,
			allowCallExpression: false,
			allowLiteral: false,
			allowNew: false,
			allowObject: false
		}],
		"import/no-commonjs": "off",
		"import/no-cycle": ["error", {
			allowUnsafeDynamicCyclicDependency: false,
			ignoreExternal: false,
			maxDepth: 1
		}],
		"import/no-default-export": "off",
		"import/no-deprecated": "off",
		"import/no-duplicates": ["error", {
			considerQueryString: false,
			"prefer-inline": false
		}],
		"import/no-dynamic-require": "warn",
		"import/no-empty-named-blocks": "error",
		"import/no-extraneous-dependencies": ["error", {
			bundledDependencies: true,
			devDependencies: true,
			includeInternal: false,
			includeTypes: false,
			optionalDependencies: true,
			peerDependencies: true
		}],
		"import/no-import-module-exports": "off",
		"import/no-internal-modules": "off",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "off",
		"import/no-named-default": "error",
		"import/no-named-export": "off",
		"import/no-namespace": "off",
		"import/no-nodejs-modules": "off",
		"import/no-relative-packages": "off",
		"import/no-relative-parent-imports": "off",
		"import/no-restricted-paths": "off",
		"import/no-self-import": "error",
		"import/no-unassigned-import": "off",
		"import/no-unresolved": ["error", {
			amd: true,
			caseSensitive: true,
			caseSensitiveStrict: true,
			commonjs: true
		}],
		"import/no-unused-modules": "off",
		"import/no-useless-path-segments": ["error", {
			noUselessIndex: true
		}],
		"import/no-webpack-loader-syntax": "error",
		"import/order": ["error", {
			alphabetize: {
				caseInsensitive: false,
				order: "asc"
			},
			groups: [
				"builtin",
				"external",
				"internal",
				["parent", "index", "sibling"],
				"type",
				"object"
			],
			"newlines-between": "always",
			warnOnUnassignedImports: false
		}],
		"import/prefer-default-export": ["error", { target: "single" }],
		"import/unambiguous": "off",
		"@stylistic/indent": ["error", "tab", {
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
			StaticBlock: {
				body: 1
			},
			SwitchCase: 1,
			VariableDeclarator: 0,
			flatTernaryExpressions: false,
			ignoreComments: false,
			ignoredNodes: [],
			offsetTernaryExpressions: false,
			outerIIFEBody: 1
		}],
		"@stylistic/indent-binary-ops": ["error", "tab"],
		"init-declarations": ["error", "always"],
		"jsdoc/check-access": "error",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-examples": "off",
		"jsdoc/check-indentation": "error",
		"jsdoc/check-line-alignment": ["error", "never", {
			preserveMainDescriptionPostDelimiter: false
		}],
		"jsdoc/check-param-names": ["error", {
			allowExtraTrailingParamDocs: false,
			checkRestProperty: false,
			enableFixer: true
		}],
		"jsdoc/check-property-names": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-types": ["error", { noDefaults: false }],
		"jsdoc/check-values": "error",
		"jsdoc/empty-tags": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/imports-as-dependencies": "off",
		"jsdoc/informative-docs": "off",
		"jsdoc/match-description": ["error", {
			matchDescription: "[A-Z].*\\."
		}],
		"jsdoc/match-name": "off",
		"jsdoc/multiline-blocks": ["error", {
			allowMultipleTags: true,
			multilineTags: [],
			noFinalLineText: true,
			noMultilineBlocks: false,
			noSingleLineBlocks: false,
			noZeroLineText: true,
			singleLineTags: []
		}],
		"jsdoc/no-bad-blocks": "error",
		"jsdoc/no-blank-block-descriptions": "error",
		"jsdoc/no-blank-blocks": "error",
		"jsdoc/no-defaults": "off",
		"jsdoc/no-multi-asterisks": ["error", {
			allowWhitespace: false,
			preventAtEnd: true,
			preventAtMiddleLines: true
		}],
		"jsdoc/no-types": "off",
		"jsdoc/no-undefined-types": ["error", {
			disableReporting: false,
			markVariablesAsUsed: false
		}],
		"jsdoc/require-asterisk-prefix": ["error", "always"],
		"jsdoc/require-description": "off",
		"jsdoc/require-description-complete-sentence": ["error", {
			abbreviations: ["e.g.", "i.e."],
			newlineBeforeCapsAssumesBadSentenceEnd: false
		}],
		"jsdoc/require-example": "off",
		"jsdoc/require-file-overview": "off",
		"jsdoc/require-hyphen-before-param-description": ["error", "always"],
		"jsdoc/require-jsdoc": "off",
		"jsdoc/require-param": ["error", {
			autoIncrementBase: 0,
			checkConstructors: true,
			checkDestructured: true,
			checkDestructuredRoots: true,
			checkGetters: true,
			checkRestProperty: true,
			checkSetters: true,
			enableFixer: true,
			enableRestElementFixer: true,
			enableRootFixer: true
		}],
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		"jsdoc/require-param-type": "error",
		"jsdoc/require-property": "off",
		"jsdoc/require-property-description": "error",
		"jsdoc/require-property-name": "error",
		"jsdoc/require-property-type": "error",
		"jsdoc/require-returns": ["error", {
			checkConstructors: true,
			checkGetters: true,
			forceRequireReturn: true,
			forceReturnsWithAsync: true
		}],
		"jsdoc/require-returns-check": "off",
		"jsdoc/require-returns-description": "error",
		"jsdoc/require-returns-type": "error",
		"jsdoc/require-throws": "off",
		"jsdoc/sort-tags": "error",
		"jsdoc/tag-lines": ["error", "never", {
			applyToEndTag: true,
			count: 0,
			endLines: 0,
			startLines: 0,
			tags: {}
		}],
		"jsdoc/text-escaping": "off",
		"jsdoc/valid-types": ["error", {
			allowEmptyNamepaths: true
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"@stylistic/key-spacing": ["error", {
			afterColon: true,
			beforeColon: false,
			mode: "strict"
		}],
		"@stylistic/keyword-spacing": ["error", {
			after: true,
			before: true,
			overrides: {}
		}],
		"@stylistic/line-comment-position": "off",
		"@stylistic/linebreak-style": ["error", "unix"],
		"@stylistic/lines-around-comment": "off",
		"@stylistic/lines-between-class-members": ["error", "always", {
			exceptAfterSingleLine: false
		}],
		"logical-assignment-operators": ["error", "always", {
			enforceForIfStatements: true
		}],
		"max-classes-per-file": ["error", {
			ignoreExpressions: false,
			max: 1
		}],
		"max-depth": "off",
		"@stylistic/max-len": "off",
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "off",
		"max-params": "off",
		"max-statements": "off",
		"@stylistic/max-statements-per-line": ["error", {
			max: 1
		}],
		"@stylistic/member-delimiter-style": ["error", {
			multiline: {
				delimiter: "semi",
				requireLast: true
			},
			multilineDetection: "brackets",
			overrides: {},
			singleline: {
				delimiter: "semi",
				requireLast: true
			}
		}],
		"@stylistic/multiline-comment-style": "off",
		"@stylistic/multiline-ternary": ["error", "never"],
		"new-cap": "off",
		"@stylistic/new-parens": ["error", "always"],
		"@stylistic/newline-per-chained-call": "off",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "off",
		"no-bitwise": "off",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"@stylistic/no-confusing-arrow": "off",
		"no-console": "off",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", {
			checkLoops: true
		}],
		"no-constructor-return": "error",
		"no-continue": "off",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "off",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": ["error", {
			includeExports: true
		}],
		"no-else-return": "off",
		"no-empty": ["error", {
			allowEmptyCatch: false
		}],
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-eq-null": "error",
		"no-eval": ["error", {
			allowIndirect: false
		}],
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": ["error", {
			enforceForLogicalOperands: true
		}],
		"no-extra-label": "error",
		"@stylistic/no-extra-parens": ["error", "all", {
			conditionalAssign: true,
			enforceForArrowConditionals: true,
			enforceForFunctionPrototypeMethods: true,
			enforceForNewInMemberExpressions: true,
			enforceForSequenceExpressions: true,
			ignoreJSX: "none",
			nestedBinaryExpressions: true,
			returnAssign: true,
			ternaryOperandBinaryExpressions: true
		}],
		"@stylistic/no-extra-semi": "error",
		"no-fallthrough": ["error", {
			allowEmptyCase: false,
			commentPattern: "Fall through"
		}],
		"@stylistic/no-floating-decimal": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": ["error", {
			allow: ["!!", "~"],
			boolean: false,
			disallowTemplateShorthand: false,
			number: true,
			string: true
		}],
		"no-implicit-globals": ["error", {
			lexicalBindings: true
		}],
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": ["error", "both"],
		"no-invalid-regexp": "error",
		"no-invalid-this": "off",
		"no-irregular-whitespace": ["error", {
			skipComments: false,
			skipJSXText: false,
			skipRegExps: false,
			skipStrings: false,
			skipTemplates: false
		}],
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": ["error", {
			allowLoop: false,
			allowSwitch: false
		}],
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"no-magic-numbers": "off",
		"no-misleading-character-class": "error",
		"@stylistic/no-mixed-operators": "off",
		"@stylistic/no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": ["error", {
			ignoreNonDeclaration: false
		}],
		"@stylistic/no-multi-spaces": ["error", {
			exceptions: {
				Property: false
			},
			ignoreEOLComments: false,
			includeTabs: true
		}],
		"no-multi-str": "error",
		"@stylistic/no-multiple-empty-lines": ["error", {
			max: 1,
			maxBOF: 0,
			maxEOF: 1
		}],
		"no-negated-condition": "off",
		"no-nested-ternary": "off",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-native-nonconstructor": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-obj-calls": "error",
		"no-object-constructor": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", { props: false }],
		"no-plusplus": "off",
		"no-promise-executor-return": ["error", { allowVoid: false }],
		"no-proto": "error",
		"no-prototype-builtins": "off",
		"no-redeclare": ["error", {
			builtinGlobals: false
		}],
		"no-regex-spaces": "error",
		"no-restricted-exports": "off",
		"no-restricted-globals": "off",
		"no-restricted-imports": "off",
		"no-restricted-properties": "off",
		"no-restricted-syntax": "off",
		"no-return-assign": ["error", "always"],
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": ["error", { props: true }],
		"no-self-compare": "error",
		"no-sequences": ["error", {
			allowInParentheses: false
		}],
		"no-setter-return": "error",
		"no-shadow": "off",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"@stylistic/no-tabs": ["error", {
			allowIndentationTabs: true
		}],
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"@stylistic/no-trailing-spaces": ["error", {
			ignoreComments: false,
			skipBlankLines: false
		}],
		"no-undef": "off",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-underscore-dangle": ["error", {
			allow: [],
			allowAfterSuper: false,
			allowAfterThis: false,
			allowAfterThisConstructor: false,
			allowFunctionParams: false,
			enforceInClassFields: false,
			enforceInMethodNames: false
		}],
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", {
			defaultAssignment: false
		}],
		"no-unreachable": "error",
		"no-unreachable-loop": ["error", { ignore: [] }],
		"no-unsafe-finally": "error",
		"no-unsafe-negation": ["error", {
			enforceForOrderingRelations: true
		}],
		"no-unsafe-optional-chaining": ["error", {
			disallowArithmeticOperators: true
		}],
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": ["error", {
			args: "after-used",
			caughtErrors: "all",
			ignoreRestSiblings: false,
			vars: "all"
		}],
		"no-use-before-define": ["error", {
			allowNamedExports: false,
			classes: true,
			functions: false,
			variables: true
		}],
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": ["error", {
			enforceForClassMembers: true
		}],
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": ["error", {
			ignoreDestructuring: false,
			ignoreExport: false,
			ignoreImport: false
		}],
		"no-useless-return": "error",
		"no-var": "warn",
		"no-void": "off",
		"no-warning-comments": ["warn", {
			location: "start",
			terms: ["fixme", "todo"]
		}],
		"@stylistic/no-whitespace-before-property": "error",
		"no-with": "error",
		"@stylistic/nonblock-statement-body-position": "off",
		"@stylistic/object-curly-newline": "off",
		"@stylistic/object-curly-spacing": "off",
		"@stylistic/object-property-newline": ["error", {
			allowAllPropertiesOnSameLine: true
		}],
		"object-shorthand": ["error", "always", {
			avoidExplicitReturnArrows: true,
			avoidQuotes: false,
			ignoreConstructors: false
		}],
		"one-var": ["error", "never"],
		"@stylistic/one-var-declaration-per-line": "off",
		"operator-assignment": ["error", "always"],
		"@stylistic/operator-linebreak": ["error", "none", {
			overrides: {}
		}],
		"@stylistic/padded-blocks": ["error", {
			blocks: "never",
			classes: "always",
			switches: "never"
		}, {
			allowSingleLineBlocks: false
		}],
		"@stylistic/padding-line-between-statements": "off",
		"prefer-arrow-callback": ["error", {
			allowNamedFunctions: false,
			allowUnboundThis: true
		}],
		"prefer-const": ["error", {
			destructuring: "any",
			ignoreReadBeforeAssign: false
		}],
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": ["error", {
			allowEmptyReject: false
		}],
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"promise/always-return": ["error", {
			ignoreLastCallback: false
		}],
		"promise/avoid-new": "off",
		"promise/catch-or-return": "error",
		"promise/no-callback-in-promise": "off",
		"promise/no-multiple-resolved": "error",
		"promise/no-native": "off",
		"promise/no-nesting": "off",
		"promise/no-new-statics": "error",
		"promise/no-promise-in-callback": "off",
		"promise/no-return-in-finally": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": ["error", {
			rejectPattern: "^reject$",
			resolvePattern: "^resolve$"
		}],
		"promise/prefer-await-to-callbacks": "off",
		"promise/prefer-await-to-then": "off",
		"promise/valid-params": "error",
		"@stylistic/quote-props": ["error", "as-needed", {
			keywords: false,
			numbers: false,
			unnecessary: true
		}],
		"@stylistic/quotes": ["error", "double", {
			allowTemplateLiterals: false,
			avoidEscape: false,
			ignoreStringLiterals: false
		}],
		radix: ["error", "as-needed"],
		"require-atomic-updates": ["error", {
			allowProperties: false
		}],
		"require-await": "error",
		"require-jsdoc": "off",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"@stylistic/rest-spread-spacing": ["error", "never"],
		"@stylistic/semi": "off",
		"@stylistic/semi-spacing": ["error", {
			after: true,
			before: false
		}],
		"@stylistic/semi-style": ["error", "last"],
		"sort-imports": ["error", {
			ignoreCase: false,
			ignoreDeclarationSort: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
		}],
		"sort-keys": ["error", "asc", {
			allowLineSeparatedGroups: false,
			caseSensitive: true,
			minKeys: 2,
			natural: true
		}],
		"sort-vars": ["error", { ignoreCase: false }],
		"@stylistic/space-before-blocks": ["error", "always"],
		"@stylistic/space-before-function-paren": ["error", {
			anonymous: "always",
			asyncArrow: "always",
			named: "never"
		}],
		"@stylistic/space-in-parens": ["error", "never", {
			exceptions: []
		}],
		"@stylistic/space-infix-ops": ["error", {
			int32Hint: false
		}],
		"@stylistic/space-unary-ops": ["error", {
			nonwords: false,
			overrides: {},
			words: true
		}],
		"@stylistic/spaced-comment": ["error", "always", {
			exceptions: [],
			markers: []
		}],
		strict: ["error", "global"],
		"@stylistic/switch-colon-spacing": ["error", {
			after: true,
			before: false
		}],
		"symbol-description": "error",
		"@stylistic/template-curly-spacing": ["error", "never"],
		"@stylistic/template-tag-spacing": ["error", "never"],
		"@stylistic/type-annotation-spacing": ["error", {
			after: true,
			before: false,
			overrides: {}
		}],
		"@stylistic/type-generic-spacing": "error",
		"@stylistic/type-named-tuple-spacing": "error",
		"unicode-bom": ["error", "never"],
		"unicorn/better-regex": ["error", {
			sortCharacterClasses: true
		}],
		"unicorn/catch-error-name": ["error", { name: "error" }],
		"unicorn/consistent-destructuring": "error",
		"unicorn/consistent-function-scoping": ["error", {
			checkArrowFunctions: true
		}],
		"unicorn/custom-error-definition": "error",
		"unicorn/empty-brace-spaces": "error",
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/expiring-todo-comments": "off",
		"unicorn/explicit-length-check": "off",
		"unicorn/filename-case": ["error", { case: "kebabCase" }],
		"unicorn/import-index": "error",
		"unicorn/import-style": "off",
		"unicorn/new-for-builtins": "error",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-array-push-push": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-await-expression-member": "off",
		"unicorn/no-console-spaces": "error",
		"unicorn/no-document-cookie": "error",
		"unicorn/no-empty-file": "error",
		"unicorn/no-for-loop": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"unicorn/no-keyword-prefix": "off",
		"unicorn/no-lonely-if": "error",
		"unicorn/no-negated-condition": "off",
		"unicorn/no-nested-ternary": "off",
		"unicorn/no-new-array": "off",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-null": "off",
		"unicorn/no-object-as-default-parameter": "error",
		"unicorn/no-process-exit": "off",
		"unicorn/no-static-only-class": "error",
		"unicorn/no-thenable": "error",
		"unicorn/no-this-assignment": "error",
		"unicorn/no-typeof-undefined": "off",
		"unicorn/no-unnecessary-await": "error",
		"unicorn/no-unnecessary-polyfills": "error",
		"unicorn/no-unreadable-array-destructuring": "off",
		"unicorn/no-unreadable-iife": "error",
		"unicorn/no-unused-properties": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"unicorn/no-useless-spread": "error",
		"unicorn/no-useless-switch-case": "error",
		"unicorn/no-useless-undefined": ["error", {
			checkArguments: true,
			checkArrowFunctionBody: true
		}],
		"unicorn/no-zero-fractions": "error",
		"unicorn/number-literal-case": "error",
		"unicorn/numeric-separators-style": ["error", {
			binary: {
				groupLength: 4,
				minimumDigits: 8
			},
			hexadecimal: {
				groupLength: 2,
				minimumDigits: 8
			},
			number: {
				groupLength: 3,
				minimumDigits: 6
			},
			octal: {
				groupLength: 4,
				minimumDigits: 8
			},
			onlyIfContainsSeparator: true
		}],
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-find": ["error", {
			checkFromLast: true
		}],
		"unicorn/prefer-array-flat": ["error", { functions: [] }],
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-some": "error",
		"unicorn/prefer-at": ["error", {
			checkAllIndexAccess: false,
			getLastElementFunctions: []
		}],
		"unicorn/prefer-blob-reading-methods": "error",
		"unicorn/prefer-code-point": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-default-parameters": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-dom-node-text-content": "error",
		"unicorn/prefer-event-target": "off",
		"unicorn/prefer-export-from": "off",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-json-parse-buffer": "off",
		"unicorn/prefer-keyboard-event-key": "error",
		"unicorn/prefer-logical-operator-over-ternary": "error",
		"unicorn/prefer-math-trunc": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-modern-math-apis": "error",
		"unicorn/prefer-module": "off",
		"unicorn/prefer-native-coercion-functions": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-number-properties": "off",
		"unicorn/prefer-object-from-entries": ["error", {
			functions: []
		}],
		"unicorn/prefer-optional-catch-binding": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/prefer-reflect-apply": "off",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-set-has": "error",
		"unicorn/prefer-set-size": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-switch": "off",
		"unicorn/prefer-ternary": "off",
		"unicorn/prefer-top-level-await": "off",
		"unicorn/prefer-type-error": "error",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/relative-url-style": ["error", "never"],
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		"unicorn/require-post-message-target-origin": "error",
		"unicorn/string-content": "off",
		"unicorn/switch-case-braces": ["error", "avoid"],
		"unicorn/template-indent": ["error", {
			comments: [],
			functions: [],
			indent: "\t",
			selectors: ["TemplateLiteral"],
			tags: []
		}],
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",
		"use-isnan": ["error", {
			enforceForIndexOf: true,
			enforceForSwitchCase: true
		}],
		"valid-jsdoc": "off",
		"valid-typeof": ["error", {
			requireStringLiterals: true
		}],
		"vars-on-top": "off",
		"@stylistic/wrap-iife": ["error", "inside", {
			functionPrototypeMethods: true
		}],
		"@stylistic/wrap-regex": "off",
		"@stylistic/yield-star-spacing": ["error", {
			after: true,
			before: true
		}],
		yoda: ["error", "never", {
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

module.exports = configuration;
