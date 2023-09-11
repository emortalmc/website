/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    printWidth: 120,
    tabWidth: 4,
    overrides: [{ files: ["*.yaml", "*.yml"], options: { tabWidth: 2 } }],
};

module.exports = config;
