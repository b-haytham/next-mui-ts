import { createRef, useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ReactECharts from "echarts-for-react";
import EChartsReact from "echarts-for-react";

const PieChart = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("xs"));
  const chartRef = createRef<EChartsReact>();
  const [chartOptions, setChartOptions] = useState({
    // title: {
    //   text: "Referer of a Website",
    //   subtext: "Fake Data",
    //   left: "center",
    // },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizental",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });

  useEffect(() => {
    chartRef.current?.getEchartsInstance().setOption(chartOptions);
    chartRef.current?.getEchartsInstance().resize({ width: 'auto' });

  }, [smDown]);

  return (
    <ReactECharts
      ref={chartRef}
      notMerge={true}
      lazyUpdate={true}
      style={{ width: '100%' }}
      option={chartOptions}
    />
  );
};

export default PieChart;
