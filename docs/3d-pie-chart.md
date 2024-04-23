<script setup>
import PieChart from '../src/chart/3dPieChart/index.vue';
</script>

# 立体饼图
<br/>

<PieChart />


<details>
<summary>代码</summary>

```vue
<script setup>
import HighChart from '../component/highChart.vue'
import { get3DRingOption } from '../config/pie'

import { computed, ref } from 'vue'

const caseSource = ref([
  ['Samsung', 23],
  ['Apple', 18],
  {
    name: 'Xiaomi',
    y: 12,
    sliced: true,
    selected: true
  },
  ['Oppo*', 9],
  ['Vivo', 8],
  ['Others', 30]
])

const caseOption = computed(() =>
  get3DRingOption({
    chart: {
      type: 'pie',
      marginTop: -10,
      marginBottom: -5,
      spacingTop: 0,
      spacingRight: 200
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}件</b>'
    },
    legend: {
      useHTML: true,
      verticalAlign: 'top',
      width: 200,
      maxHeight: 155,
      x: 200,
      y: -15,
      labelFormatter: function () {
        return `${this.name
          }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.percentage.toFixed(
            1
          )}%`
      }
    },
    series: [
      {
        type: 'pie',
        name: '数量',
        data: caseSource.value
      }
    ],
    plotOptions: {
      pie: {
        innerSize: 80,
        depth: 45
      }
    }
  })
)

</script>

<template>
  <HighChart id="pie-chart" :source="caseSource" :option="caseOption" />
</template>

<style lang="scss" scoped>
#pie-chart {
  height: 135px;
}
</style>
```
</details>