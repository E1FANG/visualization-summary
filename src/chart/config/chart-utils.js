import { merge } from "lodash-es";

export function getLegendBottom(opts = {}) {
  const { grid = {}, legend = {} } = opts;
  return {
    legend: merge(
      {
        bottom: 0,
        left: "center",
        textStyle: {
          color: "#cccccc",
          fontSize: 14,
          padding: [4, 0, 0, 0],
        },
        icon: "rect",
        itemWidth: 10,
        itemHeight: 10,
      },
      legend
    ),
    grid: merge(
      {
        height: "75%",
        width: "100%",
        left: "0%",
        bottom: "20%",
        top: "5%",
        containLabel: true,
        backgroundColor: "#cccc",
      },
      grid
    ),
  };
}
