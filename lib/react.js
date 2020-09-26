module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/button-has-type": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
  },
};
