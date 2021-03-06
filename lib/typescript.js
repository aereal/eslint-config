module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "deprecation"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
  ],
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as" },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { overrides: { constructors: "no-public" } },
    ],
    "@typescript-eslint/member-ordering": ["error"],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unified-signatures": "error",

    "@typescript-eslint/no-invalid-this": "error",
    "no-invalid-this": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "local", args: "none" },
    ],

    "deprecation/deprecation": "warn",
  },
};
