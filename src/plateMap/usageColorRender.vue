<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { areaDict } from "./area";
import { useMapLoop } from './useMapLoop.js'
import PlateMap from "./index.vue";

const { setLoopData, startLoop,
  setCustomerColorRender } = useMapLoop()

const colorMap = (num, avg) => {
  const rate = num / avg
  const map = [
    [() => rate > 1.4, ' rgba(255,58,91,0.30)'], // 红
    [() => rate > 1.3 && rate <= 1.4, 'rgba(255,97,0,0.30)'], // 橙
    [() => rate > 1.25 && rate <= 1.3, 'rgba(237,224,58,0.30)'], // 黄
    [() => rate > 1.2 && rate <= 1.3, ' rgba(29,129,255,0.30)'], // 蓝
    [() => rate <= 1.2, 'rgba(62,255,86,0.30)'] // 绿
  ]
  const target = map.find((m) => m[0]())
  const result = target[1] || 'rgba(0,30,106,0.4)' // 默认半透明蓝色
  return result
}

const generateData = () => {
  return areaDict.map(e => ({
    ...e,
    color: colorMap(115 + e.id, 100),
    border: 'rgba(255,255,255,0.50)',
    colsData: Array.from({ length: 4 }).map((_, index) => ({
      name: 'xxx数据',
      count: 99 + e.id + index,
    }))
  }))
}

onMounted(() => {
  setLoopData(generateData())
  setCustomerColorRender(true)
  startLoop()
})

onBeforeUnmount(() => {
  setCustomerColorRender(false)
})

</script>

<template>
  <div>
    <PlateMap />
  </div>
</template>

<style lang="scss" scoped></style>./area.js./area.js