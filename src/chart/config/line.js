import { merge } from 'lodash-es'
import { handleAxisUnit } from './utils'
// 曲线图
export function getLineOption (opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    xAxis = {},
    yAxis = {},
    grid = {},
    dataset = {},
    color
  } = opts
  const option = {
    title,
    dataset,
    tooltip: merge({
      trigger: 'axis'
    }, tooltip),
    legend: merge({
      textStyle: {
        color: '#cccccc'
      }
    }, legend),
    xAxis: merge({
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          opacity: 0.3
        }
      },
      axisLabel: {
        color: '#cccccc',
        fontSize: 16
      }
    }, xAxis),
    yAxis: merge({
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          dashOffset: 2,
          opacity: 0.15
        }
      },
      axisLabel: {
        color: '#cccccc',
        fontSize: 16,
        formatter: (value) => handleAxisUnit(value)
      }
    }, yAxis),
    grid,
    series: series.map((e) => merge({
      showSymbol: false,
      smooth: true,
      type: 'line'
    }, e))
  }
  if (color) {
    option.color = color
  }
  return option
}
