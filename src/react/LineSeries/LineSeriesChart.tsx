import * as React from "react";

import {
  Chart,
  Settings,
  Axis,
  LineSeries,
  niceTimeFormatByDay,
  timeFormatter,
  ScaleType
} from "@elastic/charts";
import { getMockESReponse } from "../data/SentementAnalysis";

export interface SimulationStatsGraphSeries {
  id: string;
  name: string;
  // data: Array<[number, number]>;
}

const series: SimulationStatsGraphSeries = {
  id: "test_id",
  name: "test name"
};
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}

export interface SimulationStatsGraphProps {
  simulationStatsGraphSeries: { [serie: string]: SimulationStatsGraphSeries };
}



const SimulationStatsGraph: React.FC<SimulationStatsGraphProps> = (
  props: SimulationStatsGraphProps
) => {
  const { simulationStatsGraphSeries } = props;
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
    <Chart size={{ height: 400 }}  title={"Line Series Chart"}>
      <Settings showLegend legendPosition="bottom" />

      <Axis
        title={new Date().toISOString()}
        id="bottom-axis"
        position="bottom"
        tickFormat={timeFormatter(niceTimeFormatByDay(1))}
        // showGridLines
      />
      <Axis id="left-axis" position="left" />

      {Object.keys(simulationStatsGraphSeries).map((k: string) => (
        <LineSeries
          key={k}
          id={simulationStatsGraphSeries[k].id}
          name={simulationStatsGraphSeries[k].name}
          data={data}
          xScaleType={ScaleType.Linear}
          xAccessor="date"
          yAccessors={["count"]}
        />
      ))}
    </Chart>
  );
};

export default () => (
  <SimulationStatsGraph simulationStatsGraphSeries={{ series }} />
);
