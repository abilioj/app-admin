module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 7,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: "off",
    "no-trailing-spaces": 1, // set it to 1 to get a warning.
    "no-console": "off",
    eqeqeq: "off",
    curly: "error"
}
};
