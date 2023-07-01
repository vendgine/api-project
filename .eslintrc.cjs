module.exports = {
    "extends": ["./node_modules/@vngn/codestyle/.eslintrc.cjs"],
    "overrides": [
        {
            // Configure settings for "mts"/"ts" files:
            "files": ["*.mts", "*.ts"],
            "extends": [],
            "rules": {
                // Reports invalid block tag names
                "jsdoc/check-tag-names": ["error", { "definedTags": ["openapi"] }],
                // Reports invalid padding inside JSDoc blocks
                "jsdoc/check-indentation": ["error", { "excludeTags": ["openapi"] }]
            }
        }
    ],
    "parserOptions": {
        // Use tsconfig from root directory:
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json",
    },
}
