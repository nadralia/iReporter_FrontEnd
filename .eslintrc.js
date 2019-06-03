module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "window": true,
        "define": true,
        "require": true,
        "module": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "settings": {
        "react": {
          "version": "16.8.6"
        }
      },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "es6": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react"
    ],
    "rules": {
        "jsx-quotes": [2, "prefer-double"],
        "react/display-name": [0, { "ignoreTranspilerName": false }],
        "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
        "react/jsx-boolean-value": [1, "always"],
        "react/jsx-closing-bracket-location": [2, "line-aligned"],
        "react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
        "react/jsx-handler-names": [0, {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on",
        }],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-key": 0,
        "react/jsx-max-props-per-line": [0, { "maximum": 1 }],
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": false,
        }],
        "react/jsx-no-duplicate-props": [0, { "ignoreCase": false }],
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/sort-prop-types": [0, {
            "ignoreCase": false,
            "callbacksLast": false,
        }],
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": [0, {
            "ignoreCase": false,
            "callbacksLast": false,
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-danger": 0,
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": [2],
        "react/no-did-update-set-state": [2],
        "react/no-direct-mutation-state": 0,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": [2, { "ignoreStateless": true }],
        "react/no-set-state": 0,
        "react/no-string-refs": 0,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": [2, "always"],
        "react/prop-types": [2, { "ignore": [], "customValidators": [] }],
        "react/react-in-jsx-scope": 2,
        "react/require-extension": [0, { "extensions": [".jsx"] }],
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/jsx-tag-spacing": [2, { "beforeSelfClosing": "always" }],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": true,
            "assignment": true,
            "return": true,
            "arrow": true
        }],
        "react/sort-comp": [2, {
            "order": [
                "constructor",
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ],
        }],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-indent": [2, 4],
        "complexity": [0, 0],
        "dot-notation": [2, {
            "allowKeywords": true,
            "allowPattern": "^[a-z]+(_[a-z]+)+$" // Allow snake case.
        }],
        "max-len": [2, 160, {"ignorePattern": "\\s*<"}],
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }]
    }
}
