---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Day5'
pubDate: 2025-06-01
description: 'RSS和制卡'
author: 'Merlin'
image:
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day5.webp'
    alt: '这是一片虚无'
tags: ['astro','RSS']
enclosure: 
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day5.webp'
    type: 'image/webp'
    length: 0
---

# 6.1 Day5

<!-- vim-markdown-toc GFM -->

- [6.1 Day5](#61-day5)
  - [RSS](#rss)
    - [RSS封面](#rss封面)
  - [制卡](#制卡)

<!-- vim-markdown-toc -->

今天是六月的第一天，时间总是不够用，也总是就无意识的离开了。

## RSS

今天把Astro创建的网站加了RSS功能。

很简单，就是安装一个插件，然后调用一下函数就可以，需要创建一个js脚本。

RSS使用Inoreader或者Feedly查看。

不过传播速度非常的慢，你发布一篇，需要等很久才能在这些rss阅读器中看到。

并且还不是覆盖的，只是增量添加。

### RSS封面

就是使用enclosure这个字段，添加到frontmatter中，需要有url，length，和type。

length: 0即可。

封面可以使用chatgpt来生成，挺好看的。

## 制卡

其余时间就用来制卡了。

越制卡，我发现我就越需要有工具辅佐，越使用工具，我就越倾向于做工具，给工具添加功能。

反正得行动起来，自然就可以做一些有用的东西了，因为行动了才会有需求。
