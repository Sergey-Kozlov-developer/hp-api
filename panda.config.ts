import {defineConfig} from "@pandacss/dev";

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
            // Добавляем текстовые стили
            textStyles: {
                'harry-potter': {
                    value: {
                        fontFamily: 'HarryPotter',
                        fontWeight: '400',
                        fontStyle: 'normal',
                    }
                }
            },
            // Добавляем шрифты в тему (это отдельный объект!)
            tokens: {
                fonts: {
                    'harry-potter': { value: 'HarryPotter, sans-serif' }
                }
            },
            keyframes: {
                'scrolling0header': {
                    to: {
                        boxShadow: '0 0 1rem 0 green'
                    }
                }
            }
        },
    },

    // Fonts
    globalFontface: {
        HarryPotter: {
            src: 'url(./src/0_app/fonts/harrypotter.woff2) format("woff2")',
            fontWeight: 400,
            fontStyle: 'normal',
            fontDisplay: 'swap'

        }
    },

    // The output directory for your css system
    outdir: "src/0_app/styles/styled-system",

    // Required when using path aliases: so Panda recognizes "@styled/css" and extracts styles
    importMap: "@styled",
});

