<p align="center">
  <a href="http://mkt.51job.com/pm/2019/product_case/index.html#/home">
    <img alt="Umi app" height="655" src="./docs/index.jpg">
  </a>
</p>

<h1 align="center">Umi应用</h1>
<p align="center">51job的程序执行器</p>

[English](./README.md) | 简体中文

## :triangular_flag_on_post: 项目使用umi +  react + antd-mobile

[![antd](https://img.shields.io/badge/antd-^3.19.5-brightgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)

## :video_game: 项目插件配置项参考
https://umijs.org/zh/plugin/umi-plugin-react.html

## :page_with_curl: 文件目录

    |-- config                                # umi配置，包含路由配置
    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.png                       # Favicon
    |   |-- iconfont                          # 字体图标资源
    |-- src                                   # 开发目录
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务组件
    |   |-- layout                            # 布局组件
    |   |-- models                            # 全局dva model
    |   |-- services                          # 接口服务
    |   |-- pages                             # 页面模板
    |   |-- tests                             # 单元测试
    |   |-- global.css                        # 全局css
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json                          # 依赖及配置
    |-- README.md                             # 简介

    <!-- 注释 -->
    Editorconfig 插件
    该插件的作用是告诉开发工具，如 Webstorm 自动去读取项目根目录下的 .editorconfig 配置文件，如果没有安装这个插件，光有一个配置文件是无法生效的。Webstorm 2017.1 版本之后都是自动安装这个插件的。

    如果你的 Webstorm 没有安装这个插件，参阅：Webstorm 安装 Editorconfig 插件。

## :lollipop: 项目为51job所有