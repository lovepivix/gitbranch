const path=require('path')
export default {
    "extraBabelPlugins": [
     ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
    "alias":{
        "@":path.resolve(__dirname,"./src"),
    },
    // "theme": "./theme.js",
    "proxy": {
        "/api": {
            "target": "http://169.254.3.230:7001",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
    }
}