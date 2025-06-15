---
# sidebar: false
# navbar: false
# aside: false
---

# 书写 md 文档

## 一、标题自带锚点

我们跳到一篇有标题的文档中，鼠标悬浮在标题上，可以看见锚点会显示出来，点击这个锚点 浏览器 url 上就会拼接一个 hash。锚点作用就是可以让用户通过分享链接跳转到页面的某个具体高度位置。
![alt text](https://ooo.0x0.ooo/2025/06/08/OspdsG.png)
![alt text](https://ooo.0x0.ooo/2025/06/08/OspYeI.png)

## 二、跳转 md 页面，或打开外边链接

vitepress 可以跳转到其他 md 文档中，也可以打开外部链接
如果响应跳转到其他 md 文档中，可以通过这种方法:
可以通过中括号加括号的形式，从当前 md 文档跳转到另一个 md 文档中。括号里写要跳转的 md 文档的路径，也可以是觉得路径，不用带上.md 后缀，比如像下面这样

```md
[跳到 data-loading ](./data-loading)
```

如果想要打开外部链接，也可以通过中括号加括号的方式，括号里就写要跳转的外表链接就行了，默认会打开浏览器的一个新标签页

```md
[打开外边链接](https://www.baidu.com)
```

这里演示一下，可以看到点击后跳转浏览器打开了一个新的标签页来访问百度页面。

## 三、可以通过 frontmatter 来配置界面和设置页面的一些属性

其实 frontmatter 是一组用三个短横线包裹起来的区域，可以在里面使用类似于键值对的写法来配置界面，并且这些配置的优先级最高的。
比如:配置这个界面的导航栏是否显示还是隐藏?通过下面这个 frontmatter 让导航栏隐藏、侧边栏隐藏、让大概隐藏、等等。
扩展页面的标题，描述，布局，导航栏，侧边栏，页脚，等等

```md
---
sidebar: false
navbar: false
aside: false
---
```

看看效果就可以了，还可以注释掉，也可以显示出来。

## 四、使用 github 风格的表格

我们可以使用 markdown 来渲染表格，通过下面这种语法

```md
| tables        |      Are      | cool  |
| ------------- | :-----------: | :---: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |  $12  |
| zebra stripes |   are ne at   |  $1   |
```

没有冒号或者冒号在左边代表左对齐

左右两边都有冒号代表居中对齐

右边有冒号代表右对齐

让我们看一下效果，可以发现一个表格就可以渲染出来了

## 五、渲染表情

在 vitepress 的 md 文件中，可以使用两个冒号包裹一个特殊符号表示一个表情。比如像下面这样，特殊符号就是 100。

:100:
You, last week · fix

在 md 文档中就是这样显示的：

:100:

可以写哪些符号可以在这个 github 的网址中查看：https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
当然，你其实也可以直接使用字符表情。在这个网址中直接复制表情，然后复制到 md 文件中：https://emojipedia.org/
这里就不演示了。

## 六、渲染文档的大纲

我们可以在两对中括号里写上 toc, vitepress 就会自动生成当前文档的大纲，非常的便捷，像下面这样:

```md
[[toc]]
```

比如像下面这样，会生成文档的大概，并且点击标题，会跳到对应的位置。这些大纲和右边生成的大纲目录是一样的。
[[toc]]

## 七、vitepress 的默认容器

7. vitepress 的默认容器

怎么使用 vitepress 的默认容器呢？用一对三个冒号包裹起来，第一部分后面接一个空格再加一个表示容器类型的枚举值。像下面这样：

```md
::: info
我是容器的内容
:::
```

容器类型如果是 info，那么文档上呈现的将是一个灰色边框包裹起来的区域。我们可以在页面上查看下效果。

容器类型除了可以是 info，还可以是 tip, warning, danger, details，在表现上分别是绿色边框包裹起来的区域、黄色边框包裹起来的区域、红色边框包裹起来的区域、点击可以展开收起内容的区域。

用代码表示如下：

```md
::: info
灰色边框包裹起来的区域
:::
```

```
::: info
灰色边框包裹起来的区域
:::
```

```md
::: tip
绿色边框包裹起来的区域
:::
```

```md
::: danger
红色边框包裹起来的区域
:::
```

```md
::: details
可以展开收缩的区域
:::
```

渲染效果如下：

::: info
灰色边框包裹起来的区域
:::
::: tip
绿色边框包裹起来的区域
:::
::: warning
黄色边框包裹起来的区域
:::
::: danger
红色边框包裹起来的区域
:::
::: details
可以展开收缩的区域
:::

## 八、自定义容器标题

当然我们还可以自定义容器的标题。只需要在容器类型后面加一个空格再加自定义的标题就可以了。像下面这样子：

```md
::: danger 特别小心！
禁止吸烟
:::
```

看下渲染的效果：

::: danger 特别小心！
禁止吸烟
:::

自定义其它类型的容器也是差不多的，这里就不再演示了。

## 九、高亮代码块

首先介绍一下什么是代码块。在 md 文档中，用一对三引号包裹起来的区域就可以称作代码块。

假设我们有一这样一个代码块：

```md
const a = 123;
```

它在文档中的显示效果如下：

```
const a = 123;
```

会发现显示的代码并没有那种五颜六色的效果。如果我们想要让代码块有五颜六色的效果，也就是高亮代码块，可以在第一个三引号后面追加一个编程语言名。比如上面的代码是 JavaScript，那么我可以写 JavaScript，也可以简写为 js，这样就有高亮效果了。像下面这样子：

```js
const a = 123
```

编程语言别名除了有 js、ts、css、html、shell、python 等等，只要你能想到，都可以尝下效果。

## 十、设置代码块颜色主题

我们可以高亮代码块，让代码变得五颜六色。在 vitepress 中，也可以像 vscode 设置主题一样，设置代码块的颜色主题。

我们可以通过 vitepress 的`markdown.theme`配置项配置代码块的颜色主题：

```ts
export default {
  markdown: {
    theme: 'dark-plus',
  },
}
```

`markdown.theme`值可以配置为哪些呢？正常人肯定是记不住的，但是可以在这个 github 网址中查看可以配置的值：https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes

比如我们设置`markdown.theme`为`vitesse - light`，然后再看看效果。发现代码块呈现的主题就变了。
代码块主题除了设置单一的主题，还可以分别设置 vitepress 在 light 或 dark 模式下的主题。像下面这样子：

```ts
export default {
  markdown: {
    theme: {
      light: 'vitesse - light',
      dark: 'vitesse - dark',
    },
  },
}
```

我们像这样子设置一下，然后切换 vitepress 的主题为 light 或 dark，可以看到代码块的主题分别呈现不同的颜色主题！

ok，到这里我们就讲完了如何设置代码块的颜色主题了！

## 十一、设置代码块的行高亮

假设我们想让代码块中的某一行或几行突出显示该怎么办呢？可以在第一个三反引号后加一个大括号，然后大括号里面写上要高亮的代码行数。比如想让第一行代码高亮突出显示，就这样写：

```js{1}
const a = 1;
const b = 1;
const c = 1;
```

如果想让第一行、第二行、第三行都突出显示，只需用逗号分隔要高亮的行数，像这样写：

```js{1,2,3}
const a = 1;
const b = 1;
const c = 1;
```

如果想指定多少行到多少行高亮，可以用起始行数加短横线加结束行数表示其高亮范围，像下面这样：

```js{1-3}
const a = 1;
const b = 1;
const c = 1;
```

指定某行高亮，和指定某个范围高亮是可以混用的，只需要用逗号分隔。

## 十二、代码块聚焦

我们可以让代码块的某几行聚焦显示，代码块的其它代码会模糊显示。只能通过注释的形式让某些行代码聚焦显示，其余模糊显示。该怎么注释呢？只需要在需要聚焦行的行未加上单行注释，注释后写一个中括号，中括号内写感叹号，紧接着单词 code，然后隔一个空格，再写单词 focus。用文字表达是这样，而用代码表示则如下：

```js
const a = 123
const a = 123
const a = 123 // [!code focus]
const a = 123
const a = 123
const a = 123
```

然后可以在浏览器中查看渲染后的效果，代码块聚焦的作用主要是向人们展示代码块的突出部分，而不去管其它代码，让其它代码模糊化。

## 十三、代码块对比

讲完了代码块聚焦，下面说说代码块对比。

代码块对比主要用于说明代码的删除与增加。
也是通过在行注释后面加特殊的字符，来表示代码块的对比。

表示代码行的增加，在行末尾添加 `// [!code ++]`。
表示代码行的删除，在行末尾添加 `// [!code --]`

可以看到，代码块对比与代码块聚焦的写法是类似的，只是感叹号 `code` `!code` 后面的字符不一样。

我们可以举一个例子来演示代码块对比的效果：

```js
const a = 123
const a = 123
const a = 123 // [!code ++]
const a = 123 // [!code --]
const a = 123
const a = 123
```

刷新下浏览器，就能看到效果了！

## 十四、代码块警告和错误

与代码块聚焦和代码块对比的写法类似，使用`// [!code warning]`和`// [!code error]`语法。这里就不演示了，写法都是差不多的。下去试一试就明白了。

```js
const a = 123
const a = 123
const a = 123 // [!code warning]
const a = 123 // [!code error]
const a = 123
const a = 123
```

## 十五、开启代码块行号

我们可以在配置文件中配置，每个 md 文档的代码块都显示或隐藏行号。通过如下配置项配置：

```ts
export default {
  markdown: {
    lineNumbers: true,
  },
}
```

但是还有其他方式可以配置代码块行号的显示与隐藏。

比如，在代码块的第一个三反引号的编程语言别名后面紧接着冒号加`line - numbers`或紧接着冒号加`no - line - numbers`，像下面这样：

```js:line-numbers
const a = 1;
```

<!-- 或者 -->

```js:no-line-numbers
const b = 2;
```

例如，我们让下面的代码块显示行号。

```js:line-numbers
const a = 123;
```

这样，我们就知道了有两种方法来控制代码块行号的显示与隐藏。可以在配置文件里配置，也可以在代码块的编程语言别名后面配置，后者的配置会覆盖配置文件里的配置。

## 十六、导入代码片段，并用代码块包裹起来

```md
<<< @/template.ts
```

<<< @/template.ts

设置高亮行

```md
<<< @/template.ts{highlightLines}
```

<<< @/template.ts{highlightLines}

::: tip 提示

`@`的值和`vitepress`配置的资源目录路径是一样的。除非`srcDir`选项被配置了，默认情况`vitepress`的项目根目录就是`vitepress`的资源目录。
或者，你也可以使用相对路径导入代码片段：

```
<<< ../snippets/snippet.js
```

:::

你也可以使用`VS Code region`来显示代码文件的一部分。你可以在文件路径后加一个井号`#`，然后提供一个自定义的`region`名在井号`#`后。

```
<<< @/snippets/snippet-with-region.js#snippet{1}
```

```js
// #region snippet
function foo() {}
// #endregion snippet
export default foo
```

你也可以直接在中括号`{}`里指定语言：

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1, 2, 4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1, 2, 4-6 c#}:line-numbers
```

## 十七、代码分组

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  //...
}
export default config
```

```ts [config.ts]
import type { userconfig } from 'vitepress'
const config: userConfig = {
  //...
}
export default config
```

:::

你也可以在代码分组中导入代码片段

## 十八、markdown 文件中包含 markdown 文件

你可以在一个  Markdown  文件中包含另一个  Markdown  文件。
::: tip
You can also prefix the markdown path with @, it will act as the source root. By default, it's the VitePress project root,
unless srDir is configured.
:::

<!-- @include: ./template.md -->

```md
# Docs
## Basics

<!-- @include: ./parts/basics.md -->
```

选择行数范围：

```md
# Docs
## Basics

<!-- @include: ./parts/basics.md{3,} -->
```
