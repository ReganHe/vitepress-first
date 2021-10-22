---
sidebar: false
---

# 首页

{{1+1}}

<span v-for="i in 3">{{ i }} </span>

<!-- <script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre> -->

::: v-pre
`{{ This will be displayed as-is }}`
:::

<script setup>
import CustomComponent from './examples/custom-component.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />
