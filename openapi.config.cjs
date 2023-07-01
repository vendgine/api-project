module.exports = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hello World",
            version: "0.0.1",
        },
    },
    apis: ["./build/routes/*.js"],
}
