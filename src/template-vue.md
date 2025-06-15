---
hello: world
---

# 在 markdown 中使用 vue 组件

在 VitePress 中，每个 Markdown 文件都被编译成 HTML，而且将其作为 Vue 单文件组件处理。这意味着可以在 Markdown 中使用任何 Vue 功能，包括动态模板、使用 Vue 组件或通过添加 `<script>` 标签为页面的 Vue 组件添加逻辑

## 一、使用模板语`法

像下面这样样子使用模板`语`法

```
{{1+1}}`
```

示例: 1+1 结果为 {{1+1}}

## 二、指令

也可以使用指令 (请注意，原始 HTML 在 Markdown 中也有效):

```
<span v-for="i in 3">{{ i }}</span>
```

示例:

<div v-for="i in 3">
  <span>{{i}}</span>
</div>

## 三、`<script>`和`<style>`标签

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。这里的主要区别是没有`<template>`标签：所有其他根级内容都是 Markdown。另请注意，所有标签都应放在 frontmatter 之后

```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

```

<script setup>
import { ref } from 'vue'
import Demo from './component/demo.vue'
const a=1
const b=2
const count = ref(0)
</script>

Markdown 内容

The count is: {{ count }}

<button :class="$style['a-button']" @click="count++">Increment</button>

<style module lang="scss">
.a-button {
  color: red;
  font-weight: bold;
}
</style>

:::warning
避免在 Markdown 中使用 `<style scoped>`

在 Markdown 中使用时，`<style scoped>` 需要为当前页面的每个元素添加特殊属性，这将显著增加页面的大小。当我们需要局部范围的样式时 `<style module> `是首选。
:::

## 四、使用 vue 组件

<Demo />

## 五、阻止 vue 解析渲染

我们可以通过给标签添加`v-pre` 指令来禁止 vue 解析渲染，也可以使用`v-pre`容器，禁止 vue 解析渲染容器内的内容。

```md
This <span v-pre>{{ will be displayed as-is }}</span>
```

This <span v-pre>{{ 1 + 1 }}</span>

```md
::: v-pre
{{ This will be displayed as-is }}`
:::
```

::: v-pre
{{ This will be displayed as-is }}`
:::

## 六、让 vue 解析代码块里的内容

```js-vue
Hello {{ 1 + 1 }}
```

```js-vue
const a=1
const b=2
const c={{a+b}}
```

## 七、使用 css 预处理器

VitePress 内置支持 CSS 预处理器：`.scss`、`.sass`、`.less`、`.styl` 和 `.stylus `文件。无需为它们安装 Vite 专用插件，但必须安装相应的预处理器：

```md
# .scss and .sass

npm install -D sass

# .less

npm install -D less

# .styl and .stylus

npm install -D stylus
```

下载完成后，就可以使用了。只需要在`<style></style>`标签中指定 lang 属性:

```vue
<style lang="scss">
.title {
  font-size: 16px;
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
```
