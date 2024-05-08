<script setup>
import UsageLoop from '../../src/plateMap/usageLoop.vue'
</script>


# 板块轮播

- 添加好地图数据后，即可通过startLoop()开启轮播
- 默认在组件卸载时，销毁定时器。
- 轮播默认时间间距为250毫秒，也可以通过startLoop的第一个参数修改。
<br/>

<UsageLoop />

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
  startLoop()
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