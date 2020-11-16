/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 14:56:48
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-10 10:26:18
 */

module.exports = {
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"], //文件匹配
  testEnvironment: "jsdom", //测试环境
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"], //需要测试的文件类型
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.+[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/public/",
    "<rootDir>/scripts/",
    "<rootDir>/config/",
  ],
  moduleNameMapper:{
      // ".+\.less":"identify-obj-proxy", 
  },
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // 'collectCoverage': true,
  'coverageReporters': [
    'lcov',
    'text-summary',
    'cobertura'
  ],
  testResultsProcessor: "./node_modules/jest-junit-reporter",
};
