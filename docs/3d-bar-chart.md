# 立体图表
通过两个高阶函数`renderItemFnGenerator`和`renderHorizontalItemFnGenerator`生成对应渲染函数，再给对应的渲染函数传入想要的图表配置项，获得图表的渲染项。
另可结合其他的配置函数，灵活配置图表。

<script setup>
import Vertical from '../src/chart/3dBarChart/vertical.vue';
import Horizon from '../src/chart/3dBarChart/horizon.vue';
import GridChart from '../src/chart/3dBarChart/gird-chart.vue';
import StackChart from '../src/chart/3dBarChart/stack-chart.vue';
import NotStackChart from '../src/chart/3dBarChart/not-stack-chart.vue';
</script>
<style lang="scss">
.title {
    font-size: 24px;
}
</style>
   
## 纵向图表
<br/>

<Vertical />

<details open>
<summary>代码</summary>

```vue
<script setup>
import { computed, onMounted, ref } from 'vue'
import DataChart from "../component/dataChart.vue";

import { renderItemFnGenerator, get3DBarOption } from '../config/render3DBarChart'

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
```

</details>


## 横向图表
<Horizon/>

<details>
<summary>代码</summary>

```vue
<script setup>
import { computed, onMounted, ref } from 'vue'
import DataChart from "../component/dataChart.vue";

import { renderHorizontalItemFnGenerator, getHorizontal3DBarOption } from '../config/render3DBarChart'
import { horizontalGreenBar } from '../config/colorFor3d'


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
const barOption = computed(()=>getHorizontal3DBarOption({
    yAxis: {
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
        renderItem: renderHorizontalItemFnGenerator({
          color:horizontalGreenBar
        }),
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

```

</details>

## 结合grid布局的双向图表

<GridChart/>

<details>
<summary>代码</summary>

```vue
<script setup>
import { onMounted, ref } from 'vue'
import DataChart from "../component/dataChart.vue";

import { renderHorizontalItemFnGenerator, getHorizontal3DBarOption } from '../config/render3DBarChart'
import { getCenterItemLayoutOption } from '../config/grid'
import { getLegendBottom } from '../config/chart-utils'
import {
  reverseHorBlueBar,
  horizontalGreenBar
} from '../config/colorFor3d'

const hrBarSource = ref([{
  area: '北京',
  cjNum: 100,
  aiNum: 100,
}, {
  area: '上海',
  cjNum: 200,
  aiNum: 200,
}, {
  area: '广州',
  cjNum: 300,
  aiNum: 300,
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
      },
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
```

</details>

## 堆叠柱状图

<StackChart/>

<details>
<summary>代码</summary>

```vue
<script setup>
import { computed, onMounted, ref } from 'vue'
import DataChart from "../component/dataChart.vue";

import { renderHorizontalItemFnGenerator, getHorizontal3DBarOption } from '../config/render3DBarChart'
import { horizontalGreenBar, HorBlueBar } from '../config/colorFor3d'

const barOption = computed(() => getHorizontal3DBarOption({
  yAxis: {
    data: barSource.value.map(e => e.name)
  },
  series: [
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderHorizontalItemFnGenerator({
        color: horizontalGreenBar
      }),
      data: barSource.value.map(e => e.total)
    },
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderHorizontalItemFnGenerator({
        color: HorBlueBar
      }),
      data: barSource.value.map(e => e.single)
    }
  ]
}))
</script>
```

</details>


## 非堆叠柱状图
<NotStackChart />
依赖自己封装的自定义属性 <strong>offset</strong>

<details>
<summary>代码</summary>

```vue
<script setup>
import { computed, onMounted, ref } from 'vue'
import DataChart from "../component/dataChart.vue";


import { renderItemFnGenerator, get3DBarOption } from '../config/render3DBarChart'
import { yellowBar } from '../config/colorFor3d'

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
```

</details>
