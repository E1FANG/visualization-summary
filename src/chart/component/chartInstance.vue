<template>
  <div ref="chart" />
</template>

<script>
import * as echarts from 'echarts/core'
import {
  BarChart,
  LineChart,
  PieChart,
  PictorialBarChart,
  GaugeChart,
  RadarChart,
  HeatmapChart,
  CustomChart
} from 'echarts/charts'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  MarkLineComponent,
  MarkPointComponent,
  GraphicComponent,
  DataZoomComponent
} from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'
import { merge } from 'lodash-es'

echarts.use(
  [
    CustomChart,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    TitleComponent,
    BarChart,
    LineChart,
    PieChart,
    PictorialBarChart,
    GaugeChart,
    RadarChart,
    CanvasRenderer,
    VisualMapComponent,
    HeatmapChart,
    MarkLineComponent,
    MarkPointComponent,
    GraphicComponent,
    DataZoomComponent
  ]
)

export default {
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      instance: null
    }
  },
  watch: {
    option: {
      handler() {
        const { option, instance } = this
        if (instance && option) {
          instance.setOption(merge({
            tooltip: {
              trigger: 'axis'
            }
          }, option))
        }
      },
      deep: true
    }
  },
  mounted() {
    this.initEcharts()
  },
  beforeDestroy() {
    if (this.instance) {
      this.instance.dispose()
    }
  },
  methods: {
    resize() {
      if (this.instance) {
        this.instance.resize()
      }
    },
    initEcharts() {
      this.instance = echarts.init(this.$refs.chart)
      this.instance.setOption(merge({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        }
      }, this.option))
      this.instance.on('click', (...args) => {
        this.$emit('click', ...args)
      })
    }
  }
}
</script>
