import { Box, useMediaQuery, useTheme } from "@mui/material";
import EChartsReact from "echarts-for-react";
import ReactECharts from "echarts-for-react";
import { createRef, useEffect, useState } from "react";

const LineChart = () => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down("sm"));
  const chartRef = createRef<EChartsReact>();
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      min: -1000,
      max: 1000,
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });

  console.log(xsDown)

  useEffect(() => {
    if(xsDown) {
      const options = chartOptions
      options.series[0].data[0] = 0
      chartRef.current?.getEchartsInstance().setOption(options);
      chartRef.current
        ?.getEchartsInstance()
        .resize({ width: 'auto', animation: { duration: 1 } });
    }
  }, [xsDown, chartOptions, chartRef]);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  

  const updateData = () => {
    const newData = chartOptions;
    newData.series[0].data.shift()
    newData.series[0].data.push(getRandomInt(-1000, 1000))

    const newDate = new Date(Date.now())

    newData.xAxis.data.shift()
    newData.xAxis.data.push(`${newDate.getMinutes()}:${newDate.getSeconds()}`)
    chartRef.current?.getEchartsInstance().setOption(newData);
  }

  useEffect(() => {
    const timer = setInterval( ()=> { updateData() }, 1000)
    return () => clearInterval(timer);
  }) 

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

export default LineChart;
