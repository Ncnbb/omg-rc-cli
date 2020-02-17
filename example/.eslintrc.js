
module.exports = () => {
  return {
    "env": {
      "browser": true,
      "commonjs": true,
      "node": true,
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType":"module"
    },
    "rules": {
      "no-console": "off",
      // "strict": ["error", "global"],
      "curly": "warn",
      "no-unused-vars": "off" // 只声明没使用的变量不报错
    }
  }
 
}
