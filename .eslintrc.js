module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    'plugin:vue/recommended'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multiline-html-element-content-newline": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "import/no-dynamic-require": 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "consistent-return": 0,
    camelcase: "off",
    "no-shadow": "off",
    "max-len": [
      "error",
      { code: 160 },
      {
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignorePattern: "^import [^,]+ from |^export | implements | class="
      }
    ],
    "no-param-reassign": "off",
    "import/no-cycle": 0,
    "no-unused-expressions": "off",
    "prefer-destructuring": "off",
    "no-await-in-loop": "off"
  }
};
