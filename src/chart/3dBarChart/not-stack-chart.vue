<script setup>
import DataChart from "../component/dataChart.vue";
import { renderHorizontalItemFnGenerator, getHorizontal3DBarOption } from '../config/render3DBarChart'

import { computed, onMounted, ref } from 'vue'


import { horizontalGreenBar, HorBlueBar } from '../config/colorFor3d'


const barSource = ref([{
  name: '企业1',
  total: 613,
  single: 232
}, {
  name: '企业2',
  total: 243,
  single: 132
}, {
  name: '企业3',
  total: 643,
  single: 232
}, {
  name: '企业4',
  total: 143,
  single: 32
}, {
  name: '企业5',
  total: 423,
  single: 232
}])
const barOption = computed(() => getHorizontal3DBarOption({
  yAxis: {
    data: barSource.value.map(e => e.name)
  },
  series: [
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderHorizontalItemFnGenerator({
        color: horizontalGreenBar,
        offset: -13,
      }),
      data: barSource.value.map(e => e.total)
    },
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderHorizontalItemFnGenerator({
        color: HorBlueBar,
        offset: 13
      }),
      data: barSource.value.map(e => e.single)
    }
  ]
}))

</script>

<template>
  <DataChart class="bar-chart" :option="barOption" :source="barSource" />
</template>

<style lang="scss" scoped>
.bar-chart {
  height: 200px;
}
</style>