---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Day7'
pubDate: 2025-06-03
description: '玩乐的一天'
author: 'Merlin'
image:
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day7.webp'
    alt: '这是一片虚无'
tags: ['neural network','tensorflow','numpy']
enclosure: 
    url: 'https://tree-1327913400.cos.ap-nanjing.myqcloud.com/imgs/Day7.webp'
    type: 'image/webp'
    length: 0
---
# 6.3 Day7

我技术没怎么提升，近期。

我其实想了想，主要就是因为我太怕麻烦了。

例如说如何快速输入指令，我之前看过，然后用了一天，第二天我就忘记了。

然后我就用约定速成的，基于我之前学习的东西来使用，就是键盘的上下键。

这个很慢，相比起之前我看到的方法，但我就是怕麻烦，就一直没有再去查找我之前的学到的方法。

注意：*只是学到*，而并没有学会。

但算时间经济的话，近期我再去看其实并不效益高。

使用老方法就可以了。

哎，还是要有所权衡。

**制衡**！！！

## Neural Networks

今天学了一下神经网络。

其实非常的简单，至少用起来是这样。

可能数学描述并不简单吧。

但就我学习andrew的课程，以及做他的lab，我觉得是非常简单的。

两种实现方法：

1. tensorflow
    这个直接封装好了，什么Dense，Sequential。
2. numpy
    这个还有写一写代码，但也是非常的简单。

### tensorflow

导包：

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
```

使用：

```python
# 这里创建一个多层的神经网络
model = Sequential(
    [
       tf.keras.Input(shape=(xxx,)),
       Dense(xxx,activation="xxx"),
    ],name="xxx"
)
```

### numpy

就是写两个函数，一个是sequential，一个是dense。

没了。

## np.dot和np.matmul的区别

np.dot就是一个简单的点乘。

np.matmul可以进行广播，并且是严格的矩阵运算。

np.dot能够计算的，np.matmul不一定成功。

## 广播

就是矩阵中间有长度是1的，可以与之后运算的矩阵进行比较，把这个1进行广播。

广播完后就可以运算了。

前提就是得为1。
