// import React, { useState } from 'react';
// // import randomColor from 'randomcolor';

// import { Chart, Partition } from '@elastic/charts';
// // import { EuiCodeBlock } from '@elastic/eui';
// import { pieMockData, productLookup } from './data';
// import { getMockESReponse } from '../data/SentementAnalysis';

// interface DataRow {
//   count: number;
//   carrier: number;
//   date: number; // epoch time
// }

// export function PieChart() {
//   const activeValue = useState<string>('{ testing : 1 }');
//   // const colors = randomColor({ count: pieMockData.length, hue: 'green' });
//   const response = getMockESReponse();
//   const buckets = response.aggregations.nested_scanSourceSubjectActions.combined_agg.buckets;
//   const data: DataRow[] = buckets.flatMap(({ key: carrier, combined_agg: { buckets } }) => {
//     return buckets.map(({ key: date, doc_count: count }) => ({
//         count,
//         carrier,
//         date

//       }));
//     }
//   );
//   return (
//     <div className="App">
//       <Chart size={['100%', 500]}>
//         <Partition
//           id="spec_1"
//           data={data}
//           valueAccessor={(d) => d.count as number}
//           layers={[
//             {
//               groupByRollup: (d:any) => d.sitc1,
//               // nodeLabel: (d:any) => DataRow[d].name,
//               // shape: {
//               //   fillColor: (i) => colors[i],
//               // },
//             },
//           ]}
//         />

//       </Chart>
//       <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
//         <h2>Active nodeLabel args</h2>
//         {/* <EuiCodeBlock>{activeValue}</EuiCodeBlock> */}
//       </div>
//     </div>
//   );
// }


import React from "react";

import { Chart, Settings, Partition, PartitionLayout } from "@elastic/charts";
import { getMockESReponse } from "../data/SentementAnalysis";
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}
export function PieChart() {
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
  return (
    <div className="App">
      <Chart size={["100%", 500]}  title={"Pie Chart"}>
        <Settings
          showLegend
          legendMaxDepth={1} // toggle on & off
        />
        <Partition
          id="spec_1"
          data={data}
          layout={PartitionLayout.sunburst}
          valueAccessor={(d) => d.carrier}
          layers={[
            {
              groupByRollup: (d: any) => d.g1,
              nodeLabel: (d: any) => "A",
              fillLabel: {
                valueFormatter: (d: number) => `${d}%`
              },
              shape: {
                fillColor: (d) => "blue"
              }
            },
            {
              groupByRollup: (d: any) => d.g2,
              nodeLabel: (d: any) => "B",
              fillLabel: {
                valueFormatter: (d: number) => `${d}%`
              },
              shape: {
                fillColor: (d) => "black"
              }
            }
          ]}
        />
      </Chart>
    </div>
  );
}

