import React from "react";
import {
  Chart,
  Settings,
  Axis,
  AreaSeries,
  Position,
  ScaleType,
} from '@elastic/charts';
import { getMockESReponse } from "src/react/data/SentementAnalysis";

const logger = (event: string) => (...args: any[]) => {
  console.log('event:', event);
  console.log(...args);
};
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}
export const AreaSeries2Chart = ({title}:{title:any}) => {
  const response = getMockESReponse();
  const buckets = response.aggregations.nested_scanSourceSubjectActions.combined_agg.buckets;

  const data: DataRow[] = buckets.flatMap(
    ({ key: carrier, combined_agg: { buckets } }) => {
      return buckets.map(({ key: date, doc_count: count }) => ({
        count,
        carrier,
        date
      }));
    }
  );
  return (
    <div className="App">
      <Chart size={['100%', 500]} title={"Area Series Chart"}>
        <Settings
          onElementClick={logger('onElementClick')}
          onElementOver={logger('onElementOver')}
          onBrushEnd={logger('onBrushEnd')}
        />
        <Axis
          id="bottom"
          position={Position.Bottom}
          title="bottom"
          showOverlappingTicks
        />
        <Axis
          id="left"
          title="left"
          position={Position.Left}
          tickFormat={(d) => Number(d).toFixed(2)}
        />
        <Axis
          id="top"
          position={Position.Top}
          title="top"
          showOverlappingTicks
        />
        <Axis
          id="right"
          title="right"
          position={Position.Right}
          tickFormat={(d) => Number(d).toFixed(2)}
        />
        <AreaSeries
          id="lines"
          splitSeriesAccessors={["carrier"]}
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="count"
          yAccessors={['date']}
          data={data}
        />
      </Chart>
    </div>
  );
}
