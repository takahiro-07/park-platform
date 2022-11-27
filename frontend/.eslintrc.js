// eslint:recommended ・・・ ESLintの推奨ルールがセットされる。1から自分でセットするのは大変なので、おすすめ。ただ、検出してほしいコードがエラーにならないデメリットもあるため、

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true, // グローバル変数を認識できるようにする  https://developer.mozilla.org/ja/docs/Web/API/Window
    es2021: true, // ES2021までに導入されたグローバル変数が認識される。2022の場合、es2022: tureを追加
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:jsx-a11y/recommended",                                       // ※注意 アクセシビリティを考慮する。HTMLやWAI-ARIAロールを意識して書かないといけないので、慣れていない場合は検討したほうがいい。個人的には入れたい。
    "prettier", // eslintとprettierのコード整形がバッティングしないようにする。あと最後に書くことが推奨されている
    // "plugin:@typescript-eslint/recommended-requiring-type-checking", // 型情報が厳密になるが、制約が多い。慣れていない場合、不要な気がする。また修正するたびにビルド時間が長くなる。
  ],
  parser: "@typescript-eslint/parser", // eslintがTypeScriptを解析
  parserOptions: {
    // どの構文を使用しているかをESLintに伝えるためのオプション
    ecmaFeatures: {
      jsx: true, // JSXをサポート
    },
    ecmaVersion: "latest", // https://eslint.org/docs/latest/user-guide/configuring/language-options
    sourceType: "module", // モジュールモードを指定するとimport / export構文がサポートされる
  },
  plugins: [
    "react", // reactのルール
    "@typescript-eslint", // TypeScriptのルール
    // "jsx-a11y",
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      // 変数の名付け規則
      "error",
      { selector: "typeLike", format: ["PascalCase"] }, // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md#group-selectors
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    // "jsx-a11y/rule-name": 2 // jsx-a11yを適用する場合は必要
  },
  settings: {
    react: {
      version: "detect", // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    },
  },
}
