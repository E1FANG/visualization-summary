import { merge, omit } from "lodash-es";

// 左右水平布局
export function getBothLayoutOption(opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    xAxis = {},
    yAxis = {},
    grid = {},
    color,
  } = opts;
  const option = {
    title,

    tooltip: merge(
      {
        trigger: "axis",
      },
      tooltip
    ),

    legend: merge(
      {
        textStyle: {
          color: "#cccccc",
        },
      },
      legend
    ),

    grid: merge(
      new Array(2)
        .fill({
          top: "0",
          right: "50%",
          left: "0",
          height: "85%",
          containLabel: true,
        })
        .map((e, i) => ({
          ...e,
          right: i === 0 ? "50%" : "0",
          left: i === 0 ? "0" : "50%",
        })),
      grid
    ),

    xAxis: merge(
      new Array(2)
        .fill({
          gridIndex: 0,
          type: "value",
          axisLabel: {
            color: "rgba(204,204,204,1)",
            fontSize: 14,
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.15)",
              type: [3, 5],
              dashOffset: 1,
            },
          },
        })
        .map((e, i) => ({
          ...e,
          gridIndex: i,
          inverse: i === 0,
        })),
      xAxis
    ),

    yAxis: merge(
      new Array(2)
        .fill({
          type: "category",
          position: "right",
          gridIndex: 0,
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "rgba(204,204,204,1)",
            fontSize: 16,
          },
        })
        .map((e, i) => ({
          ...e,
          gridIndex: i,
          position: i === 1 ? "right" : "left",
        })),
      yAxis
    ),

    series: series.map((e, i) =>
      merge(
        {
          xAxisIndex: i,
          yAxisIndex: i,
          gridIndex: i,
        },
        e
      )
    ),
  };
  if (color) {
    option.color = color;
  }
  return option;
}

// 文字居中，两侧柱状图
export function getCenterItemLayoutOption(opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    xAxis = {},
    yAxis = {},
    grid = {},
    color,
  } = opts;
  console.log(yAxis);
  const option = {
    title,

    tooltip: merge(
      {
        trigger: "axis",
      },
      tooltip
    ),

    legend: merge(
      {
        textStyle: {
          color: "#cccccc",
        },
      },
      legend
    ),

    grid: merge(
      new Array(2)
        .fill({
          top: "0",
          right: "50%",
          left: "0",
          height: "85%",
          containLabel: true,
        })
        .map((e, i) => ({
          ...e,
          right: i === 0 ? "58%" : 12,
          left: i === 0 ? 12 : "48%",
        })),
      grid
    ),

    xAxis: merge(
      new Array(2)
        .fill({
          gridIndex: 0,
          inside: true,
          type: "value",
          axisLabel: {
            color: "rgba(204,204,204,1)",
            fontSize: 14,
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.15)",
              type: [3, 5],
              dashOffset: 1,
            },
          },
        })
        .map((e, i) => ({
          ...e,
          gridIndex: i,
          // position: 'left',
          inverse: i === 0,
        })),
      xAxis
    ),

    yAxis: new Array(2)
      .fill({
        type: "category",
        position: "right",
        gridIndex: 0,
        offset: 32,
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      })
      .map((e, i) =>
        merge(
          {
            ...e,
            gridIndex: i,
            position: i === 1 ? "left" : "right",
            axisLabel: {
              width: 65,
              height: 100,
              color: "rgba(204,204,204,1)",
              fontSize: 16,
              overflow: "truncate",
              align: "center",
              show: i,
              // margin: 12
            },
          },
          omit(yAxis, ["axisLabel"])
        )
      ),

    series: series.map((e, i) =>
      merge(
        {
          xAxisIndex: i,
          yAxisIndex: i,
          gridIndex: i,
        },
        e
      )
    ),
  };
  console.log(1111, option);
  if (color) {
    option.color = color;
  }
  return option;
}
