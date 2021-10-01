module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // Add your custom rules here
  rules: {
    // Enforce 2 space indentation in <script> section
    indent: 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],

    // Disable "require a line break before and after the contents of a single line element"
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
    'vue/singleline-html-element-content-newline': 'off',

    // Disallow a space before function parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', 'never'],

    // Disable "Enforce order of attributes"
    // https://eslint.vuejs.org/rules/attributes-order.html
    'vue/attributes-order': 'off'
  }
}
