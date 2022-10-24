import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage : { 
            provider: "c8",
            all: true,
            include: ["src/**/*.js", "src/*.js"],
            exclude: ["src/Conditionals/index.js", "src/**/*.test.js"]
        }
    }
})