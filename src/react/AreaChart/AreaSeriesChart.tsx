import * as React from "react";

import {
  Chart,
  Axis,
  Position,
  ScaleType,
  Settings,
  ColorVariant,
  PartialTheme,
  AreaSeries,
  CurveType
} from "@elastic/charts";

import { getMockESReponse } from "../data/SentementAnalysis";
import moment from "moment";
interface DataRow {
  count: number;
  carrier: number;
  date: number; // epoch time
}

export const AreaSeriesChart = ({ title }: { title: any }) => {
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

  const customTheme: PartialTheme = {
    areaSeriesStyle: {
      point: {
        visible: true,
        radius: 10,
        fill: ColorVariant.Series,
        stroke: ColorVariant.None,
        opacity: 0.5,
      },
      area: {
        opacity: 0.2,
      },
      line: {
        visible: false,
      },
    },
  }
  return <>
    <Chart size={["100%", 500]} title={title}>
      <Settings showLegend
        showLegendExtra
        legendPosition={Position.Right}
        theme={customTheme} />
      <Axis id="count" title="Count" position={Position.Left} />
      <Axis
        id="time"
        title="Time"
        position={Position.Bottom}
        tickFormat={(tickValue) => moment(tickValue).format("l")}
      />
      <AreaSeries
        id="bars"
        name="flights by carrier"
        // xScaleType={ScaleType.Time}
        stackAccessors={["true"]}
        splitSeriesAccessors={["carrier"]}
        xAccessor="date"
        yAccessors={["count"]}
        xScaleType={ScaleType.Linear}
        yScaleType={ScaleType.Linear}
        curve={CurveType.CURVE_MONOTONE_X}
        data={data}
      />
    </Chart>
  </>
}


