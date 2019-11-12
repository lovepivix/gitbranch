import path from "path";

const pxtorem = require("postcss-pxtorem");

export default {
  theme: "./src/theme/index.js",
 
  env: {
    development: {
      extraBabelPlugins: [
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "es",
            style: "true"
          }
        ]
      ],
      alias: {
        "@": path.resolve(__dirname, "src")
      },
     
      "proxy": {
        "/api": {
          "target": " http://127.0.0.1:7001",
          "changeOrigin": true,
          "pathRewrite": { "^/api" : "" }
        }
      },
      extraPostCSSPlugins: [
        // pxtorem({ rootValue: 100, propList: ["*", "!font*"] }) 
      ]
    },
    production: {
      extraBabelPlugins: [
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "es",
            style: "true"
          }
        ]
      ],

      extraPostCSSPlugins: [
        // pxtorem({ rootValue: 100, propList: ["*", "!font*"] })
      ]
    }
  }
};
