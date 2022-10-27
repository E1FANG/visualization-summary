import * as echarts from 'echarts/core'

export function initEchartGraphicShape () {
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const offset = shape.offset
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - 8, shape.y - 8]
      const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const offset = shape.offset
      const c0 = [shape.x, shape.y]
      const c1 = [xAxisPoint[0], xAxisPoint[1]]
      const c2 = [xAxisPoint[0] + 12, xAxisPoint[1] - 4]
      const c3 = [shape.x + 12, shape.y - 4]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const offset = shape.offset
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x + 12, shape.y - 4]
      const c2 = [shape.x + 4, shape.y - 12]
      const c3 = [shape.x - 8, shape.y - 8]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)
}

export function initHorizontalEchartGraphicShape () {
  const longDiagonal = 8
  const shortDiagonal = 6
  // 绘制左侧面
  const CubeLeftHor = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const { yAxisPoint, xAxisPoint, offset, api } = shape
      const c0 = [shape.x, shape.y]
      const c1 = [yAxisPoint[0], shape.y]
      const c2 = [yAxisPoint[0], shape.y + longDiagonal]
      const c3 = [shape.x + shortDiagonal, shape.y + longDiagonal]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 绘制右侧面
  const CubeRightHor = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const { yAxisPoint, xAxisPoint, offset, api } = shape
      const c0 = [shape.x, shape.y]
      const c1 = [yAxisPoint[0], shape.y]
      const c2 = [yAxisPoint[0], shape.y - longDiagonal]
      const c3 = [shape.x + shortDiagonal, shape.y - longDiagonal]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 绘制顶面
  const CubeTopHor = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const offset = shape.offset
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x + shortDiagonal, shape.y + longDiagonal]
      const c2 = [shape.x + shortDiagonal * 2, shape.y]
      const c3 = [shape.x + shortDiagonal, shape.y - longDiagonal]
      ctx
        .moveTo(c0[0] + offset, c0[1])
        .lineTo(c1[0] + offset, c1[1])
        .lineTo(c2[0] + offset, c2[1])
        .lineTo(c3[0] + offset, c3[1])
        .closePath()
    }
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeftHor', CubeLeftHor)
  echarts.graphic.registerShape('CubeRightHor', CubeRightHor)
  echarts.graphic.registerShape('CubeTopHor', CubeTopHor)
}
