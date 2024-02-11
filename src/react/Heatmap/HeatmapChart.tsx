import React from "react";

import {
  Chart,
  ScaleType,
  Settings,
  Heatmap,
  niceTimeFormatter
} from "@elastic/charts";
import { getMockESReponse } from "../data/SentementAnalysis";
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}
export function HeatmapChart(): JSX.Element {
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
      <Chart size={["100%", 500]} title={"Heat Map Chart"}>
        <Settings showLegend />
        <Heatmap
          id="heatmap1"
          colorScale={{
            type: 'bands',
            bands: [
              { start: -Infinity, end: 1000, color: '#AADC32' },
              { start: 1000, end: 5000, color: '#35B779' },
              { start: 5000, end: 10000, color: '#24868E' },
              { start: 10000, end: 50000, color: '#3B528B' },
              { start: 50000, end: Infinity, color: '#471164' },
            ],
          }}
          data={data}

          valueAccessor="count"
          xAccessor="date"
          yAccessor={"count"}
          // valueFormatter={(d) => `${Number(d.toFixed(2))}℃`}
          ySortPredicate="numAsc"
          yAxisLabelName="count"
        xAxisLabelName="date"
          xScale={{
            type: ScaleType.Time,
            interval: {
              type: "fixed",
              unit: "m",
              value: 30
            }
          }}
          xAxisLabelFormatter={(value) => {
            return niceTimeFormatter([1572825600000, 1572912000000])(value, {
              timeZone: "UTC"
            });
          }}
        />
      </Chart>
    </div>
  );
}
