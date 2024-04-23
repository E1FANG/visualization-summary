<script setup>
import DataChart from "../component/dataChart.vue";
import { renderHorizontalItemFnGenerator, getHorizontal3DBarOption } from '../config/render3DBarChart'

import { getCenterItemLayoutOption } from '../config/grid'


import { getLegendBottom } from '../config/chart-utils'

import { onMounted, ref } from 'vue'


import {
  reverseHorBlueBar,
  horizontalGreenBar
} from '../config/colorFor3d'

const hrBarSource = ref([{
  area: '北京',
  cjNum: 123,
  aiNum: 123,
}, {
  area: '上海',
  cjNum: 223,
  aiNum: 223,
}, {
  area: '广州',
  cjNum: 323,
  aiNum: 323,
}])
const hrBarOption = ref({})
const initHrBarChart = () => {
  hrBarOption.value = getCenterItemLayoutOption(
    getHorizontal3DBarOption({
      color: ['rgba(0,160,255,1)', 'rgba(73,183,92,1)'],
      legend: {
        show: false
      },
      yAxis: {
        data: hrBarSource.value.map((e) => e.area)
      }
      ,
      series: [
        {
          name: '油车',
          type: 'custom',
          renderItem: renderHorizontalItemFnGenerator({
            color: reverseHorBlueBar
          }),
          data: hrBarSource.value.map((e) => e.cjNum || '0')
        },
        {
          name: '电车',
          type: 'custom',
          renderItem: renderHorizontalItemFnGenerator({
            color: horizontalGreenBar
          }),
          data: hrBarSource.value.map((e) => e.aiNum || '0')
        }
      ]
    })
  )
}

onMounted(() => {
  initHrBarChart()
})


</script>

<template>
  <div>
    <DataChart class="hr-bar-chart" :option="hrBarOption" :source="hrBarSource" />
  </div>
</template>

<style lang="scss" scoped>
.hr-bar-chart {
  height: 350px;
}
</style>