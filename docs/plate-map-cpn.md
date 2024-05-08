<script setup>
import UsageBarPopup from '../src/plateMap/usageBarPopup.vue'
</script>


# 自定义弹窗组件

<UsageBarPopup />

<details>
<summary>代码</summary>

```vue

<script setup>
import { onMounted } from 'vue';
import { areaDict } from "./area";
import { useMapLoop } from './useMapLoop.js'
import PlateMap from "./index.vue";

const { setLoopData, setPanelType } = useMapLoop()

const generateData = () => {
  return areaDict.map(e => ({
    ...e,
    colsData: Array.from({ length: 4 }).map((_, index) => ({
      name: 'xxx数据',
      count: 99 + e.id + index
    }))
  }))
}

onMounted(() => {
  setLoopData(generateData())
  setPanelType('barChart')
})
</script>

<template>
  <div>
    <PlateMap />
  </div>
</template>


```

</details>

<br/>

这里的示例是自定义了一个柱状图弹窗组件。

- 通过useMapLoop暴露的setPanelType可以修改弹窗所使用的组件。
- 自定义组件时需要提前在PlateMap中注册组件。
```js
    // 弹窗组件拓展 注册
  const cpnDict = {
    base: BasePanel,
    barChart: BarChartPanel
  }
  // 
 // 内部展示实现
  <component :is="cpnDict[panelType]" :current-street-data="currentStreetData" />
```
- 自定义组件内部需要把内容还有数据处理好。