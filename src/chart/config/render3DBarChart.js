import { merge } from 'lodash-es'
import { defaultColor } from './colorFor3d'
import { initEchartGraphicShape, initHorizontalEchartGraphicShape } from './utils'
initEchartGraphicShape()
initHorizontalEchartGraphicShape()

export function renderItemFnGenerator (options = {}) {
  const { color = defaultColor, offset = 0 } = options
  return (params, api) => {
    const location = api.coord([api.value(0), api.value(1)])
    return {
      type: 'group',
      children: [
        {
          type: 'CubeLeft',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.left
          }
        },
        {
          type: 'CubeRight',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.right
          }
        },
        {
          type: 'CubeTop',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.top
          }
        }
      ]
    }
  }
}


export function renderHorizontalItemFnGenerator (options = {}) {
  const { color = defaultColor, offset = 0 } = options
  return (params, api) => {
    const location = api.coord([api.value(0), api.value(1)])
    return {
      type: 'group',
      children: [
        {
          type: 'CubeLeftHor',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0]),
            yAxisPoint: api.coord([api.value(1), 0])
          },
          style: {
            fill: color.left
          }
        },
        {
          type: 'CubeRightHor',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0]),
            yAxisPoint: api.coord([api.value(1), 0])
          },
          style: {
            fill: color.right
          }
        },
        {
          type: 'CubeTopHor',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0]),
            yAxisPoint: api.coord([api.value(1), 0])
          },
          style: {
            fill: color.top
          }
        }
      ]
    }
  }
}
export function get3DBarOption (opts = {}) {
  const option = merge({
    color: ['#F2B502', '#29C266', '#FF4F5B'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10px',
      bottom: '15px',
      height: '95%',
      width: '95%',
      left: '5',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisTick: {
        show: false,
        length: 9,
        alignWithLabel: true,
        lineStyle: {
          color: 'rgba(204,204,204,1)'
        }
      },
      axisLabel: {
        show: true,
        fontSize: 16,
        color: 'rgba(204,204,204,1)'
      }
    },
    yAxis: {
      // min: 0,
      // max: 1200,
      // interval: 200,
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(204,204,204,1)'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 16
      }
      // boundaryGap: ['20%', '20%']
    }
  }, opts)
  return option
}

export function getHorizontal3DBarOption (opts = {}) {
  const option = merge({
    grid: {
      left: '0px',
      right: '0px',
      width: '96%',
      top: '8px',
      height: '80%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisTick: {
        show: false,
        length: 9,
        alignWithLabel: true,
        lineStyle: {
          color: 'rgba(204,204,204,1)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisLabel: {
        show: true,
        fontSize: 16,
        color: 'rgba(204,204,204,1)'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(204,204,204,1)'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 16
      }
    }
  }, opts)
  return option
}