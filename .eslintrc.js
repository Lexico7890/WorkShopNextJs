module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "no-multiple-empty-lines": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    semi: "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
  },
};
