module.exports = {
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/require-jsdoc": [
      "error",
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          MethodDefinition: true,
        },
        checkConstructors: false,
      },
    ],
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns": "off",
  },
};
