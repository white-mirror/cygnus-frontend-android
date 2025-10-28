import path from "node:path";
import { fileURLToPath } from "node:url";

import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: [
      "dist/",
      "build/",
      "node_modules/",
      "capacitor-cordova-android-plugins/",
      "app/build/",
      "app/src/main/assets/public/",
      "eslint.config.mjs",
    ],
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }
);
