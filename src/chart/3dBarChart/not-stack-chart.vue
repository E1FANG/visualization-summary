<script setup>
import DataChart from "../component/dataChart.vue";
import { renderItemFnGenerator, get3DBarOption } from '../config/render3DBarChart'

import { computed, onMounted, ref } from 'vue'


import { yellowBar } from '../config/colorFor3d'


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
const barOption = computed(() => get3DBarOption({
  xAxis: {
    data: barSource.value.map(e => e.name)
  },
  series: [
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderItemFnGenerator({
        offset: -13,
      }),
      data: barSource.value.map(e => e.total)
    },
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderItemFnGenerator({
        color: yellowBar,
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