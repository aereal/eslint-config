module.exports = {
  root: true,
  extends: ["./presets/node.js"],
  env: {
    node: true,
  },
  ignorePatterns: ["testdata/**/*"],
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["./presets/typescript.js"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        createDefaultProgram: true,
        project: "./tsconfig.json",
      },
    },
  ],
};
