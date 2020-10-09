/*配置antd按需打包,还需在package.json文件修改一下对象，配置才能生效
默认
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

更改后
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
*/
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    //针对antd实现按需打包：根据import来打包（使用babel-plugin-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        //style: 'css', //自动打包相关的样式，处理编译后的文件
        style: true, //使用lessloader，处理less源码文件
    }),

    //先要下载 yarn add less less-loader两个包
    //使用less-loader对源码中的less的变量进行重新指定，自定义主题，修改了less文件
    addLessLoader({
        //javascriptEnabled: true,
        //options: {
            lessOptions: { //注意新版
                modifyVars:{'primary-color': '#1DA57A',}, //默认蓝色，改为绿色
                javascriptEnabled: true,
            },
        //}
        //modifyVars: {'@primary-color': '#1DA57A'},//修改默认颜色
    }),
);

