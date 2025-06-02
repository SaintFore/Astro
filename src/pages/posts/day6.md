---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Day6'
pubDate: 2025-06-02
description: '继续Astro的学习'
author: 'Merlin'
image:
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day6.webp'
    alt: '这是一片虚无'
tags: ['astro','github','vscode']
enclosure: 
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day6.webp'
    type: 'image/webp'
    length: 0
---

# 6.2 Day6

<!-- vim-markdown-toc GFM -->

- [6.2 Day6](#62-day6)
  - [github conflict](#github-conflict)
  - [Astro可以用其他框架](#astro可以用其他框架)
  - [前端部分](#前端部分)
  - [VScode插件：Markdown All in One](#vscode插件markdown-all-in-one)

<!-- vim-markdown-toc -->

已经第六天了。

过的也太快了。

## github conflict

遇到冲突，或者说第一次遇到冲突，首先要选择把rebase给禁掉。

也就是：

```git
git config pull.rebase false
```

小白用merge就行了。

```git
git pull origin master
```

拉到本地仓库，然后把冲突的给变成不冲突再提交。

## Astro可以用其他框架

UI框架组件其实就是日常说的前端框架。

Astro可以用其他的框架。

比如React，今天加了一个jsx文件，就是react的文件。

## 前端部分

之后再看吧，就是一些很细碎的知识。

我是有打算作为全栈工程师的，因为我想自己做一些东西出来。

但是确实是知识太细碎了。

## VScode插件：Markdown All in One

保存的时候可以直接读取整个文件的TOC，生成TOC。