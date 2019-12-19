/* eslint-disable */  // 禁止eslint检测  
module.exports = {
    root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: { //sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
      'sourceType': 'module',
      'parser': 'babel-eslint'
    },
    extends: [
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "eslint:recommended"
    ],
    plugins: ['prettier'], // 此项是用来提供插件的，插件名称省略了eslint-pluygin-，下面这个配置是用来规范html的
    rules: {   // "off" -> 0 关闭规则  // "warn" -> 1 开启警告规则 //"error" -> 2 开启错误规则
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // es6相关
        // 要求箭头函数体使用大括号
        "arrow-body-style": 2,
        // 要求使用 let 或 const 而不是 var
        "no-var": 2,
        // "vue/max-attributes-per-line": "off"
        // "vue/html-self-closing": [
        //   "error",
        //   {
        //     "html": {
        //       "void": "any"
        //     }
        //   }
        // ]
        // 'arrow-parens': 0,
        // allow async-await
        // 'generator-star-spacing': 0,
        // // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        //"semi": [2, "always"],
        // //禁止不必要的分号
        // "no-extra-semi": 0,
        // "no-console": 0,
        // "no-useless-escape": 0,
        // "prettier/prettier": [
        // "error",
        //     {
        //         "singleQuote": true,
        //         // "semi": false,
        //         // "semicolons": true,
        //         "bracketSpacing": false,
        //         "trailingComma": "none",
        //         "jsxBracketSameLine": true    
        //     }
        // ]
  }
}