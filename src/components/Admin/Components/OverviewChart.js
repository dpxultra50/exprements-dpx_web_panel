import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
// import { useGetSalesQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  //   const { data, isLoading } = useGetSalesQuery();

  const data = [
    {
      id: "japan",
      color: "hsl(202, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 44,
        },
        {
          x: "helicopter",
          y: 72,
        },
        {
          x: "boat",
          y: 57,
        },
        {
          x: "train",
          y: 27,
        },
        {
          x: "subway",
          y: 190,
        },
        {
          x: "bus",
          y: 176,
        },
        {
          x: "car",
          y: 232,
        },
        {
          x: "moto",
          y: 172,
        },
        {
          x: "bicycle",
          y: 89,
        },
        {
          x: "horse",
          y: 285,
        },
        {
          x: "skateboard",
          y: 54,
        },
        {
          x: "others",
          y: 189,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(87, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 71,
        },
        {
          x: "helicopter",
          y: 181,
        },
        {
          x: "boat",
          y: 272,
        },
        {
          x: "train",
          y: 28,
        },
        {
          x: "subway",
          y: 90,
        },
        {
          x: "bus",
          y: 80,
        },
        {
          x: "car",
          y: 128,
        },
        {
          x: "moto",
          y: 281,
        },
        {
          x: "bicycle",
          y: 65,
        },
        {
          x: "horse",
          y: 98,
        },
        {
          x: "skateboard",
          y: 75,
        },
        {
          x: "others",
          y: 278,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(25, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 39,
        },
        {
          x: "helicopter",
          y: 39,
        },
        {
          x: "boat",
          y: 88,
        },
        {
          x: "train",
          y: 214,
        },
        {
          x: "subway",
          y: 228,
        },
        {
          x: "bus",
          y: 18,
        },
        {
          x: "car",
          y: 245,
        },
        {
          x: "moto",
          y: 6,
        },
        {
          x: "bicycle",
          y: 258,
        },
        {
          x: "horse",
          y: 126,
        },
        {
          x: "skateboard",
          y: 92,
        },
        {
          x: "others",
          y: 247,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary[200],
            },
          },
          legend: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.secondary[200],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.secondary[200],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.secondary[200],
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
