import * as React from "react";

import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings,
  ColorVariant,
  PartialTheme
} from "@elastic/charts";

import { getMockESReponse } from "../data/SentementAnalysis";
import moment from "moment";
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}

export const BarSeriesChart = ({title}:{title:any}) => {
  const response = getMockESReponse();
  const buckets = response.aggregations.nested_scanSourceSubjectActions.combined_agg.buckets;
  const data: DataRow[] = buckets.flatMap(({ key: carrier, combined_agg: { buckets } }) => {
    return buckets.map(({ key: date, doc_count: count }) => ({
        count,
        carrier,
        date

      }));
    }
  );
  const customTheme: PartialTheme = {
    lineSeriesStyle: {
      point: {
        radius: 10,
        fill: ColorVariant.Series,
        stroke: ColorVariant.None,
      },
    },
  };
  return <>
      <Chart size={["100%", 500]} title={title}>
        <Settings
        showLegend
        showLegendExtra
        legendPosition={Position.Right}
        theme={customTheme} />
        <Axis id="count" title="Count" position={Position.Left} />
        <Axis
          id="key"
          title="key"
          position={Position.Bottom}
          tickFormat={(tickValue) => moment(tickValue).format("l")}
        />
        <BarSeries
          id="bars"
          name="flights by carrier"
          xScaleType={ScaleType.Time}
          stackAccessors={["true"]}
          splitSeriesAccessors={["carrier"]}
          xAccessor="date"
          yAccessors={["count"]}
          data={data}
        />
      </Chart>
      </>
}

// export function BarSeriesChart({title}:{title:string}) {
//   const response = getMockESReponse();
//   // const aggregations: Aggregations = response.aggregations;

//   // Navigate through nested structure to find carrier data
//   const carrierBuckets = response.aggregations.nested_scanSourceSubjectActions.combined_agg.buckets;

//   // Flatten the data and generate date values based on bucket index
//   const data = carrierBuckets.flatMap(({ key: carrier, combined_agg: { buckets } }) =>
//     buckets.map(({ doc_count: count }, index) => ({
//       count,
//       carrier,
//       // Generate date value based on index (assuming each bucket represents a certain date)
//       date: moment().subtract(index, "days").valueOf() // Modify this based on your actual data structure
//     }))
//   );

//   console.log(data);

//   return (
//     <div className="App">
//       <Chart size={["100%", 500]}>
//         <Settings showLegend />
//         <Axis id="count" title="Flight Count" position={Position.Left} />
//         <Axis
//           id="time"
//           title="Time"
//           position={Position.Bottom}
//           tickFormat={(tickValue) => moment(tickValue).format("l")}
//         />
//         <BarSeries
//           id="bars"
//           name="flights by carrier"
//           xScaleType={ScaleType.Time}
//           xAccessor="date"
//           yAccessors={["count"]}
//           stackAccessors={["true"]}
//          splitSeriesAccessors={["carrier"]}
//           data={data}
//         />
//       </Chart>
//     </div>
//   );
// }
