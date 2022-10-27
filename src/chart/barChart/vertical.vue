<script setup>
import DataChart from "../component/dataChart.vue";
import { renderItemFnGenerator, get3DBarOption } from '../config/render3DBarChart'

import { computed, onMounted, ref } from 'vue'

const barSource = ref([{
  name:'企业1',
  total:613
},{
  name:'企业2',
  total:243
},{
  name:'企业3',
  total:643
},{
  name:'企业4',
  total:143
},{
  name:'企业5',
  total:423
}])
const barOption = computed(()=>get3DBarOption({
    xAxis: {
      data: barSource.value.map(e => e.name)
    },
    grid: {
      top: '10px',
      height: '92%'
    },
    series: [
      {
        name: '企业车辆数',
        type: 'custom',
        renderItem: renderItemFnGenerator(),
        data: barSource.value.map(e => e.total)
      }
    ]
  }))

</script>

<template>
  <DataChart
      class="bar-chart"
      :option="barOption"
      :source="barSource"
    />
</template>

<style lang="scss" scoped>
.bar-chart {
  height: 160px;
}

</style>