import { defineConfig, globalIgnores } from "eslint/config";
import rocketseatConfig from "@rocketseat/eslint-config";

const eslintConfig = defineConfig([
  ...rocketseatConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ])
]);

export default eslintConfig;
