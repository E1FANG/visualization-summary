<script setup>
import UsageBase from '../../src/plateMap/usageBase.vue'
</script>


# 基础用法
- 通过useMapLoop设置地图数据，就可以用鼠标hover板块进行弹窗数据展示。
- 对弹窗做了处理，使其不会超出板块地图

<UsageBase />

<details open>
<summary>代码</summary>

```vue

<script setup>
import { onMounted } from 'vue';
import { areaDict } from "./area";
import { useMapLoop } from './useMapLoop.js'
import PlateMap from "./index.vue";

const { setLoopData } = useMapLoop()

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
})
</script>

<template>
  <div>
    <PlateMap />
  </div>
</template>

<style lang="scss" scoped></style>

```

</details>


<br/>

useMapLoop, 这个hook暴露了一些控制板块地图的api，方便使用者对地图进行操作

| Api      | 作用 |
| ----------- | ----------- |
| setLoopData      | 设置板块地图数据       |
| loopClock   | 获取当前轮播计时器        |
| startLoop   | 开始地图轮播        |
| destroyLoop   | 销毁轮播        |
| currentLoop   | 获取当前轮播数据        |
| customerColorRender   | 获取当前自定义颜色渲染器状态        |
| setCustomerColorRender   | 设置自定义颜色渲染器状态       |
| panelType  |  获取当前弹窗组件类型  |
| setPanelType  | 设置当窗组件类型  |

具体的一些用法和效果，可以查看后面的篇章。