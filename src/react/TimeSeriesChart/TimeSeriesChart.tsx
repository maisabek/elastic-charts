import React from "react";
import { data } from "./timeSeries";
import { anomalies } from "./anomalies";
import {
  Chart,
  Axis,
  BarSeries,
  Position,
  ScaleType,
  Settings,
  AreaSeries,
  LineSeries,
  CurveType,
  RectAnnotation,
  LineAnnotation
} from "@elastic/charts";

export function TimeSeriesChart() {
  const anomalySeries = anomalies;

  return (
    <Chart size={[1000, 500]} title={"Time Series Chart"}>
      <Settings showLegend />
      <Axis id="y" position={Position.Left} />
      <Axis id="x" position={Position.Bottom} />
      {/* {data.map((serie) => {
        const Series = serie.type === "area" ? AreaSeries : LineSeries;

        return (
          <Series
            key={serie.title}
            id={serie.title}
            xScaleType={ScaleType.Time}
            yScaleType={ScaleType.Linear}
            xAccessor="x"
            yAccessors={["y"]}
            y0Accessors={["y0"]}
            data={serie.data}
            color={serie.color}
            curve={CurveType.CURVE_MONOTONE_X}
          />
        );
      })} */}
      {anomalySeries?.bounderies && (
        <AreaSeries
          key={anomalySeries.bounderies.title}
          id={anomalySeries.bounderies.title}
          xScaleType={ScaleType.Time}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={["y"]}
          y0Accessors={["y0"]}
          data={anomalySeries.bounderies.data}
          color={anomalySeries.bounderies.color}
          curve={CurveType.CURVE_MONOTONE_X}
          hideInLegend
          filterSeriesInTooltip={() => false}
        />
      )}

      {anomalySeries?.scores && (
        <>
          <RectAnnotation
            key={anomalySeries.scores.title}
            id="score_anomalies"
            dataValues={anomalySeries.scores.data.map(({ x0, x: x1 }) => ({
              coordinates: {
                x0,
                x1
              }
            }))}
            style={{
              fill: anomalySeries.scores.color
            }}
          />
          <LineAnnotation
            id={"line"}
            style={{ line: { opacity: 0 } }}
            dataValues={anomalySeries.scores.data.map(({ x0, x }) => {
              return { dataValue: x0, details: `detail-${x0}` };
            })}
            domainType={"xDomain"}
            marker={
              <div
                style={{
                  // margin: "5px",
                  width: "10px", // the width is statically confiured, see #556
                  height: "10px",
                  background: "red"
                }}
              />
            }
          />
        </>
      )}
    </Chart>
  );
}
