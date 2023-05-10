module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "!<rootDir>/src/main/**/*",
        "!**/*.d.ts",
        "!**/index.ts",
    ],
    coverageDirectory: "coverage",
    setupFilesAfterEnv: ["<rootDir>/src/main/config/jest-setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    testEnvironment: "jsdom",
    transform: {
        ".+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
        "\\.scss$": "identity-obj-proxy",
    },
};
