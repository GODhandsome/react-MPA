因为要做基于react的多页面，可以使用create-react-app脚手架直接生成react项目，避免自己过多的配置。  
`npm install create-react-app -g`       
`create-react-app app-name`  
生成项目结构如下<br/>
      ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/1.png)<br/>
`registerServiceWorker`文件可以删掉，是pwa用的。然后在src下创建多页面文件夹，并拷贝**App.js App.css index.js index,css**到每个文件夹下做入口文件。<br/>
      ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/2.png)<br/>
然后首先安装依赖<br/>
     ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/3.png)<br/>
接着在根目录下新建webpack.config.js配置如下<br/>
    ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/4.png)<br/>
     ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/5.png) <br/>
其中glob处理路径,HtmlWebpackPlugin生成html并引用相关的js.css文件，ExtractTextPlugin抽离css样式，CleanWebpackPlugin删除dist文件夹.<br/>    
最后修改package.json中scrpts中的start以及build如下<br/>
      ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/6.png)<br/>
之后就可以开始项目的开发以及构建了。路由后面跟上对应的文件夹名就可以进行调试开发了。因为我们引用了antd-mobile，需要在babel配置引入，并且因为要用css module 需要单独配置less。<br/>
开发完成以后生成文件目录如下<br/>
     ![Image text](https://github.com/GODhandsome/react-MPA/blob/master/img-folder/7.png)
