module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "chai", "fixture"],
        files: [
            {
                pattern: "./frontend/test/fixtures/**/*.json",
            },
            {
                pattern: "./frontend/test/fixtures/**/*.html",
            },
            "frontend/public/bundle.css",
            "frontend/public/bundle.js",
            "frontend/public/query-builder.js",
            "frontend/public/query-sender.js",
            "frontend/public/query-index.js",
            "frontend/test/query-builder.spec.js",
            "frontend/test/query-sender.spec.js"
        ],
        preprocessors: {
            "frontend/test/fixtures/**/*.html": ["html2js"],
            "frontend/test/fixtures/**/*.json": ["json_fixtures"]
        },
        jsonFixturesPreprocessor: {
            variableName: "__json__"
        },

        reporters: ["mocha"],
        urlRoot : "/__karma__/",
        port: 8080,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: false,
        browsers: ["ChromeHeadless"],
        singleRun: true,
        browserNoActivityTimeout: 5000
    });
};
