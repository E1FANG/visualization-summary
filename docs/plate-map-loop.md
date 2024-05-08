<script setup>
import UsageLoop from '../src/plateMap/usageLoop.vue'
</script>


# 板块轮播
<br/>

<UsageLoop />

<details>
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