---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My first'
pubDate: 2025-05-29
description: '这就是一个普通的文档'
author: 'Merlin'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: '这是一片虚无'
tags: ['learning in public','soleil']
---
<img src='https://docs.astro.build/assets/rose.webp'/>
# 5.28 Day 1

<!-- vim-markdown-toc GFM -->

* [配置vim](#配置vim)
* [vim插件使用markdown](#vim插件使用markdown)
* [vim使用](#vim使用)
    * [折叠](#折叠)
    * [撤销与返回](#撤销与返回)
* [linux指令操作](#linux指令操作)
* [markdown生成目录](#markdown生成目录)

<!-- vim-markdown-toc -->

这是使用vim的第一天，我也不知道为什么在vim中使用小鹤双拼是没有问题的，但是在正常的系统中使用却有问题。

## 配置vim
分成三步吧

1. 在自己的文件夹下面创建`.vimrc`文件。
2. 编辑`.vimrc`文件，添加一些set之类的，可以在网上搜索一下。
3. 添加插件。

前两步不说了，就是复制粘贴。

添加插件也是，不过要让插件其效果，先要保存，也就是`:wq`一下，然后再进入vim，接着输入指令`:PlugInstall`这样才可以安装。

## vim插件使用markdown

添加两个插件：
1. `Plug 'plasticboy/vim-markdown`
2. `Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app && npm install' }`

第二个如果没有后面的do指令，就需要前往`~/.vim/plugged/markdown-preview.nvim/app/`下方使用`npm install`指令。

这样才可以使用。

接着在指令模式下面输入`:MarkPreview`就可以在浏览器中预览了。

## vim使用

### 折叠

vim能够识别到markdown文件，然后就会把标题下方的内容进行折叠。

取消折叠就是把光标移动到折叠的位置，使用指令`za`就可以取消折叠。

再折叠起来就还是把光标移动对应的位置，使用指令`zc`就可以折叠起来了。

`zR`全部解开折叠。

`zM`全部折叠

### 撤销与返回

以操作为单位进行。

一个操作就是插入模式与指令模式的切换，一直位于插入模式输入，那就一直算是一个操作，所以当觉得可以了就进行模式切换。

不然一个操作涉及的东西太多了，不方便。

两个指令：

1. 撤销`u`
2. 返回撤销`ctrl + u`

可以撤销与返回撤销多次，并且我安装了插件可以推出后还有


## linux指令操作

我现在使用linux指令总是要用到上下键，这个远离主键盘，总是感觉有些不太舒服。

其实更正确的是使用`ctrl`键。

`Ctrl + A`到指令的最开头

`Ctrl + E`到指令的最后

`Ctrl + B`下一个字母

`Ctrl + F`上一个字母

`Ctrl + K`删除光标到行尾的所有指令

`Ctrl + U`删除到行首的所有指令

`Ctrl + W`删除光标前面的所有指令

`Ctrl + R`历史搜索指令，直接输入就行，会显示最近的指令

## markdown生成目录

安装插件`Plug 'mzlogin/vim-markdown-toc'`

使用指令`:GenTocGFM`，这个是在光标处生成目录，风格是Github风格的。
