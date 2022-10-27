
import { graphic } from 'echarts/core'
import chartColor from './chartColor'

// 默认纵向渐变
// hor - 水平渐变  ｜ reverse - 翻转

export const defaultColor = {
  top: 'rgba(154,255,169,1)',
  right: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(74,188,97,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(111,233,136,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ])
}

export const yellowBar = {
  top: 'rgba(255,211,81,1)',
  right: chartColor.brightYellow,
  left: chartColor.brightYellow2
}

export const horizontalGreenBar = {
  top: '#9AFFA9',
  right: new graphic.LinearGradient(1, 0, 0, 0, [
    {
      offset: 0,
      color: 'rgba(111,233,136,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ]),
  left: new graphic.LinearGradient(1, 0, 0, 0, [
    {
      offset: 0,
      color: 'rgba(74,188,97,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ])
}

export const BlueBar = {
  top: '#4BBAFF',
  right: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(0,157,255,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(0,115,187,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ])
}

export const YellowBar = {
  top: '#FFD351',
  right: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(171,133,2,1)'
    },
    {
      offset: 1,
      color: 'rgba(171,133,2,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(242,181,2,1)'
    },
    {
      offset: 1,
      color: 'rgba(242,181,2,0)'
    }
  ])
}

export const reverseHorGreenBar = {
  top: '#9AFFA9',
  right: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: 'rgba(111,233,136,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: 'rgba(74,188,97,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ])
}

export const HorBlueBar = {
  top: '#4BBAFF',
  right: new graphic.LinearGradient(1, 0, 0, 0, [
    {
      offset: 0,
      color: 'rgba(0,157,255,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ]),
  left: new graphic.LinearGradient(1, 0, 0, 0, [
    {
      offset: 0,
      color: 'rgba(0,115,187,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ])
}

export const reverseHorBlueBar = {
  top: '#4BBAFF',
  right: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: 'rgba(0,157,255,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: 'rgba(0,115,187,1)'
    },
    {
      offset: 1,
      color: 'rgba(0,157,255,0)'
    }
  ])
}

export const reverseRightHorBlueBar = {
  top: '#4BBAFF',
  right: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 1,
      color: 'rgba(0,115,187,1)'
    },
    {
      offset: 0,
      color: 'rgba(0,157,255,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 1,
      color: 'rgba(0,157,255,1)'
    },
    {
      offset: 0,
      color: 'rgba(0,157,255,0)'
    }
  ])
}

export const RedBar = buildBarColor(
  '#FF979E',
  ['rgba(255,79,91,1)', 'rgba(255,79,91,0)'],
  ['rgba(214,30,42,1)', 'rgba(255,79,42,0)']
)

function buildBarColor (topColor, [leftTopColor, leftButtonColor], [rightTopColor, rightButtonColor]) {
  return {
    top: topColor,
    left: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: leftTopColor
      },
      {
        offset: 1,
        color: leftButtonColor
      }
    ]),
    right: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: rightTopColor
      },
      {
        offset: 1,
        color: rightButtonColor
      }
    ])
  }
}