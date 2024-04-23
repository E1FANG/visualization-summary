import { merge } from "lodash-es";

export const pieColor = [
  "#009DFF",
  "#FDAD43",
  "#11C372",
  "#FF4F5C",
  "#B620E0",
  "#11C2C1",
];

// 圆环
export function getRingTitle({ title, value = 0, unit = "", left, top }) {
  return {
    show: true,
    left: left || "center",
    top: top || "center",
    textStyle: {
      // width: 96,
      height: 96,
      rich: {
        val: {
          fontSize: 24,
          color: "#ffffff",
          lineHeight: 28,
          fontWeight: 500,
          height: 48,
        },
        name: {
          fontSize: 14,
          color: "#CCCCCC",
          lineHeight: 18,
          fontWeight: 500,
          align: "center",
          height: 48,
        },
      },
    },
    text: [
      `{val|${
        value || typeof value === "string" || typeof value === "number"
          ? value
          : value + unit
      }}`,
      `{name|${title}}`,
    ].join("\n"),
  };
}

export function getRingOption(opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    grid = {},
    color = pieColor,
  } = opts;
  const option = {
    title,
    color,
    grid,
    tooltip: merge(
      {
        trigger: "item",
      },
      tooltip
    ),
    legend: merge(
      {
        bottom: "0",
        left: "center",
        itemWidth: 8,
        itemHeight: 8,
        icon: "circle",
        textStyle: {
          color: "#cccccc",
        },
      },
      legend
    ),
    series: series.map((e) =>
      merge(
        {
          name: "",
          type: "pie",
          radius: ["75%", "100%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            formatter: "{d}%",
            color: "#cccccc",
            fontSize: 16,
          },
          labelLine: {
            length: 16,
            length2: 6,
            lineStyle: {
              color: "#cccccc",
            },
          },
        },
        e
      )
    ),
  };
  console.log(option);
  return option;
}

export function getFullPieBottomLegend(opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    grid = {},
    color = pieColor,
  } = opts;
  const option = {
    title,
    color,
    tooltip: merge(
      {
        trigger: "item",
      },
      tooltip
    ),
    grid: merge(
      {
        height: "100%",
        top: 0,
        bottom: 0,
      },
      grid
    ),
    legend: merge(
      {
        bottom: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: "circle",
        left: "center",
        // data: data.map((e) => (e.name)),
        textStyle: {
          color: "#cccccc",
          padding: [3, 5, 3, 5],
        },
      },
      legend
    ),
    series: series.map((e) =>
      merge(
        {
          type: "pie",
          radius: "50%",
          center: ["50%", "43%"],
          selectedMode: "single",
          label: {
            color: "#cccccc",
            fontFamily: "PingFangSC",
            // fontWeight: 'Regular',
            fontSize: 16,
            formatter: "{d}%",
          },
          labelLine: {
            lineStyle: {
              color: "#cccccc",
            },
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        e
      )
    ),
  };
  return option;
}
// 犬类服务(概况)
export function getFlowerDog(opts) {
  const {
    series = [],
    legend = {},
    title = {},
    tooltip = {},
    grid = {},
    color = pieColor,
  } = opts;
  const option = {
    title,
    color,
    grid,
    tooltip: merge(
      {
        trigger: "item",
      },
      tooltip
    ),
    legend: merge(
      {
        bottom: "0",
        left: "center",
        itemWidth: 8,
        itemHeight: 8,
        icon: "circle",
      },
      legend
    ),
    series: series.map((e) =>
      merge(
        {
          name: "",
          type: "pie",
          radius: ["75%", "100%"],
          avoidLabelOverlap: false,
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          roseType: "radius",
          labelLine: {
            length: 16,
            length2: 6,
            lineStyle: {
              color: "#ffffff",
            },
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: () => Math.random() * 200,
        },
        e
      )
    ),
  };
  return option;
}

// 圆环通用样式
export function ringSeriesItemStyleNormal(opts = {}) {
  return merge(
    {
      type: "pie",
      selectedMode: "single",
      label: {
        color: "#ccc",
        fontFamily: "PingFangSC",
        // fontWeight: 'Regular',
        fontSize: 14,
      },
      labelLine: {
        length: 4,
        length2: 4,
        lineStyle: {
          color: "#ccc",
        },
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
    opts
  );
}

export function get3DRingOption(opts = {}) {
  const option = merge(
    {
      chart: {
        backgroundColor: "transparent",
        type: "pie",
        options3d: {
          enabled: true,
          depth: 30,
          alpha: 70,
          beta: 0,
        },
      },
      colors: ["#FF4F5C", "#FFD938", "#1AAE75", "#2A9CFF", "#7F58FF"],
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      legend: {
        floating: true,
        itemStyle: {
          color: "#cccccc",
        },
        maxHeight: 150,
        itemDistance: 50,
        itemMarginTop: 12,
        labelFormatter: function () {
          if (!this.percentage) return "";
          return `
          ${this.name}&nbsp;&nbsp;&nbsp;
          <span style="color:white">${this.percentage.toFixed(1)}%</span>
        `;
        },
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          showInLegend: true,
          allowPointSelect: true,
          cursor: "pointer",
          depth: 45,
          dataLabels: {
            enabled: false,
          },
        },
      },
    },
    opts
  );
  return option;
}
