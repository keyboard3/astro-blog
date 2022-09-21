---
layout: '@/templates/BasePage.astro'
title: 简历
description: 个人经历
pubDate: 2022-09-21 10:06:23
imgSrc: '/assets/images/image-post.jpeg'
imgAlt: 'Image post 2'
---

# 个人信息
- 甘春雨
- 前端负责人
- keyboard3@icloud.com
- 浙江树人大学-计算机科学与技术 2012-2016
- 求职中(上海/杭州)
---

# 工作经历
## 推文科技（2018-08-2022-07）
- 前端负责人
- 技术栈: React、React Native、Node、Typescript、Webpack、Java、Objective-C
- 负责技术选型，基础设施搭建，业务开发，团队技术成长
### [BabelNovel 海外网文阅读主站](https://babelnovel.com/)
- 初期随着产品迭代，逐渐完善基于 React 的自研 SSR 服务端渲染框架
- 不断重构 SSR 基建保证与 Next.js 相似 api，且基于 Next.js 设计做少量 Hook，使其平滑过度至 Next.js
- 基于 Webpack 的 JsParser Hooks 实现条件编译插件，可以让 dead code 的 require 包不会被纳入打包模块依赖图
- 采用 Babel 对生产环境路由 ts 文件进行静态语法分析，并根据浏览器访问路由动态修改开发环境路由文件，提高开发编译效率
- 针对各项目持续集成过程耗时分析，采用 Docker、Webpack、Niginx 等手段加速构建过程
- 及时迭代更新项目技术栈，新项目尽量采用业界主流实践，Hooks、React Query、TailwindCSS 等
- 在需求评审及约定 Api 后，利用 express web 框架快速实现接口，快速搭建原型完成产品闭环
- 关注网站性能指标，持续做性能优化
### BabelNovel 海外网文阅读 APP 端
- 采用 React Native 跨端方案，复用 Web 业务逻辑，降低开发成本
- 深入 Metro resolver 模块解析原理解决循环依赖，使得马甲包开发可以复用主包任意模块内封装的导出逻辑，极大提高开发效率
- 实现自动化打包流程的脚本，根据不同环境，不同马甲包做打包、上传和备份操作
- 将 Tensorflow lite 训练的 TTS 模型方案实现作为 Android 原生 TTS 的 engine 对 RN 层暴露一致的 Js 接口
### 导流站点
- 在单 Node 服务中采用 monorepo 形式松耦合 Next.js 和 Nest.js，提高开发效率

## 店达商城（2018-01 ~ 2018-08）
- 前端工程师
- 技术栈: Js、Vue、Java
- 负责 Android 、小程序及管理台的业务开发

## 端云科技（2016-10 ~ 2017-12）
- Android 工程师
- 技术栈: Java、Kotlin
- 参与电信内部 Android App 相关业务迭代开发

---

# 自我评价
- 对 Js 技术栈有较强的自信。对 Js 的运行时有一定的理解和经验，分别用 Js 和 C++ 实现过简易 Js 虚拟机。对 Js 的执行疑惑能够去看 EcmaScript 标准，看过 SpiderMonkey, QuickJs 源码。基于 QuickJs 实现过简易的 Node 和浏览器
- 坚定的跨端信仰者，对原生 android kotlin jetpack, iOS swiftUI 以及跨端 Flutter 和 React Native 都有研究，包括 Node.js 做 BFF 层也有一定的实践，对 React 和 Vue 也颇有了解
- 编程语言爱好者，用过 Js、Java、Groovy、Kotlin、Dart、Swift、Objective-C 、C++、C# 等，了解 Go、Rust、Erlang、Ruby、Crystal
- 对待业务主动思考产品的逻辑闭环，积极主动的完善业务痛点和开发痛点