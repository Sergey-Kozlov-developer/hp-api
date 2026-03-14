import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        'scrolling0header': {
          to: {
            boxShadow: '0 0 1rem 0 green'
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "src/0_app/styles/styled-system",

  // Required when using path aliases: so Panda recognizes "@styled/css" and extracts styles
  importMap: "@styled",
});
