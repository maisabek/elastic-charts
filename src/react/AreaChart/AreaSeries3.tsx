import React from 'react';

import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings,
  PartialTheme,
  ColorVariant,
} from '@elastic/charts';
import { getMockESReponse } from 'src/react/data/SentementAnalysis';

interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}
export default function App() {
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
  return (
    <div className="App">
      <Chart size={['100%', 500]} title={"Area Series Chart"}>
        <Settings/>
        <Axis id="count" title="count" position={Position.Left} />
        <Axis id="carrier" title="carrier" position={Position.Bottom} />
        <BarSeries
          id="bars"
          name="amount"
          xScaleType={ScaleType.Ordinal}
          xAccessor="carrier"
          yAccessors={['count']}
          data={data}
        />
      </Chart>
    </div>
  );
}
