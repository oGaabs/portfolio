import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 🔹 Estilo de código
      semi: ["error", "never"], // sem ponto e vírgula
      quotes: ["error", "double"], // aspas duplas
      indent: ["error", 2], // indentação de 2 espaço

      // 🔹 Boas práticas (core)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // 🔹 TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]

export default eslintConfig
