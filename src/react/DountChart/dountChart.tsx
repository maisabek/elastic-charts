import React, { useState } from 'react';
import randomColor from 'randomcolor';

import { Chart, Datum, Partition } from '@elastic/charts';
// import { EuiCodeBlock } from '@elastic/eui';
import { pieMockData, productLookup } from '../pieChart/data';
import { getMockESReponse } from '../data/SentementAnalysis';

interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}

export  function DountChart() {
  const colors = randomColor({ count: pieMockData.length, hue: 'green' });

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
      <Chart size={['100%', 500]} title={"Dount Chart"}>
        <Partition
          id="spec_1"
          data={pieMockData}
          valueAccessor={(d) => d.exportVal as number}
          layers={[
            {
              groupByRollup: (d:Datum) => d.sitc1,
              //@ts-ignore
              nodeLabel: (d:Datum) => productLookup[d].name,
              shape: {
                fillColor: (i:any) => colors[i],
              },
            },
          ]}
        />
      </Chart>

    </div>
  );
}
