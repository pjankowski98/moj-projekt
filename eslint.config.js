import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Podstawowe lintowanie JS wg recommended
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // dla import/export
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // Reguły specyficzne dla testów z Jest
  {
    files: ["**/*.test.js"],
    plugins: { jest: jestPlugin },
    extends: ["plugin:jest/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest, // rozpoznaje describe/test/expect
      },
    },
  },
]);