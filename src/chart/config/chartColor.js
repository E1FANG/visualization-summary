import { graphic } from 'echarts/core'

// 图例颜色
export const legendColor = {
  blue: '#2A9CFF',
  green: '#58CE85',
  yellow: '#F2B502',
  red: '#FF4F5B',
  purple: '#AE40C3'
}

// 1 开始, 0 结束
// [右, 下, 左, 上]
function linearGradientDirection (options) {
  const { left = 0, right = 0, top = 0, bottom = 0 } = options
  return [right, bottom, left, top]
}
const direction = {
  leftToRight: linearGradientDirection({ left: 1 })
}

const blockToGreen = new graphic.LinearGradient(...direction.leftToRight, [
  {
    offset: 1,
    color: 'rgba(39,230,157,1)'
  },
  {
    offset: 0,
    color: 'rgba(39,230,157,0)'
  }
])

export default {

  blockToGreen,

  // 红色到蓝色渐变
  redToBlue: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0.1,
      color: '#FF4758'
    },
    {
      offset: 1,
      color: '#009AFF'
    }
  ]),
  // 蓝色渐变-横向
  blueGradient: new graphic.LinearGradient(
    0,
    0,
    1,
    0, // 起始位置，右，下，左，上
    [
      {
        offset: 0,
        color: 'rgba(0,209,253,0.1)'
      },
      {
        offset: 1,
        color: 'rgba(0,211,255,1)'
      }
    ],
    false
  ),
  // 蓝色渐变-纵向
  blueGradientVertical: new graphic.LinearGradient(
    0,
    1,
    0,
    0,
    [
      {
        offset: 0,
        color: 'rgba(0,209,253,0.1)'
      },
      {
        offset: 1,
        color: 'rgba(0,211,255,1)'
      }
    ],
    false
  ),
  // 绿色渐变-横向
  greenGradient: new graphic.LinearGradient(
    0,
    0,
    1,
    0,
    [
      {
        offset: 0,
        color: 'rgba(0,157,255,0.1)'
      },
      {
        offset: 1,
        color: 'rgba(17,195,114,1)'
      }
    ],
    false
  ),
  // 绿色渐变-纵向
  greenGradientVertical: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(17,195,114,0.2)'
  }, {
    offset: 1,
    color: 'rgba(17,195,114,1)'
  }], false),
  // 橙色到绿色
  orangeToGreen: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0.1,
      color: '#ED434F'
    },
    {
      offset: 0.5,
      color: '#FDAD43'
    },
    {
      offset: 1,
      color: '#11C372'
    }
  ]),
  // 黑到白-纵向
  blackToWhiteVertical: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0.1,
      color: '#000000'
    },
    {
      offset: 1,
      color: 'rgba(0,0,0,0.1)'
    }
  ]),
  // 土黄色-纵向
  mudYellow: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(252,172,67,0)'
  }, {
    offset: 1,
    color: 'rgba(252,172,67,1)'
  }], false),
  // 土黄色-横向
  mudYellow2: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(255,120,62,0)'
  }, {
    offset: 1,
    color: 'rgba(255,120,62,1)'
  }], false),
  brightYellow: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(180,135,0,1)'
    },
    {
      offset: 1,
      color: 'rgba(171,133,2,0)'
    }
  ]),
  brightYellow2: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(242,181,2,1)'
    },
    {
      offset: 1,
      color: 'rgba(242,181,2,0)'
    }
  ]),
  // 黑黄色-横向
  blackYellow: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(227,181,33,0)'
  }, {
    offset: 1,
    color: 'rgba(255,196,35,1)'
  }], false),
  // 黑绿-横向
  blackGreen: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(39,232,158,0)'
  }, {
    offset: 1,
    color: 'rgba(39,232,158,1)'
  }], false),
  // 青蓝色-纵向
  cyan: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(17,194,193,0)'
  }, {
    offset: 1,
    color: 'rgba(17,194,193,1)'
  }], false),
  // 青蓝色2-纵向
  cyan2: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: '#67d4ff'
  }, {
    offset: 1,
    color: '#00b7ff'
  }], false),
  // 青绿色-纵向
  greenLight: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: '#4dffae'
  }, {
    offset: 1,
    color: '#19cf7d'
  }], false),
  barLineColor: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: '#11C372'
    },
    {
      offset: 1,
      color: 'rgba(17,195,114,0.00)'
    }
  ]),
  // 深蓝色渐变-纵向
  deepBlue: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(0,157,255,0.2)'
  }, {
    offset: 1,
    color: 'rgba(0,157,255,1)'
  }], false),
  // 深蓝色到浅蓝色渐变-横向
  deepBlueToLightBlue: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#007EFF'
  }, {
    offset: 1,
    color: '#60D8FF'
  }]),
  blackRed: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(255,79,92,0)'
  }, {
    offset: 0.28,
    color: 'rgba(255,79,92,0.7)'
  }, {
    offset: 0.5,
    color: 'rgba(255,79,92,1)'
  }, {
    offset: 0.78,
    color: 'rgba(255,79,92,0.7)'
  }, {
    offset: 1,
    color: 'rgba(255,79,92,0)'
  }], false),
  blackBlue: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(0,157,255,0)'
  }, {
    offset: 0.28,
    color: 'rgba(0,157,255,0.7)'
  }, {
    offset: 0.5,
    color: 'rgba(0,157,255,1)'
  }, {
    offset: 0.78,
    color: 'rgba(0,157,255,0.7)'
  }, {
    offset: 1,
    color: 'rgba(0,157,255,0)'
  }], false),
  blackPurple: new graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: 'rgba(127,88,255,0)'
  }, {
    offset: 0.28,
    color: 'rgba(127,88,255,0.7)'
  }, {
    offset: 0.5,
    color: 'rgba(127,88,255,1)'
  }, {
    offset: 0.78,
    color: 'rgba(127,88,255,0.7)'
  }, {
    offset: 1,
    color: 'rgba(127,88,255,0)'
  }], false),
  noneToGreen: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(247,181,0,0.00)'
  }, {
    offset: 1,
    color: '#6DD400'
  }]),
  noneToCyan: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(54,103,214,0.00)'
  }, {
    offset: 1,
    color: '#06ece9'
  }]),
  // 青蓝色纵向
  cyan3: new graphic.LinearGradient(0, 1, 0, 0, [{
    offset: 0,
    color: 'rgba(39,169,251,0.00)'
  }, {
    offset: 1,
    color: '#1ffbf6'
  }], false)
}
