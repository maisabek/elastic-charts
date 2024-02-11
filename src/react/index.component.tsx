import {
  AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PieChart } from "./pieChart/pieChart";
import LineSeriesChart from "./LineSeries/LineSeriesChart";
import { HeatmapChart } from "./Heatmap/HeatmapChart";
import { BarSeriesChart } from "./BarSeriesChart/BarSeriesChart";
import { AreaSeriesChart } from "./AreaChart/AreaSeriesChart";
import AreaSeries3 from "./AreaChart/AreaSeries3";
import { AreaSeries2Chart } from "./AreaChart/AreaSeries2Chart";
import { DountChart } from "./DountChart/dountChart";
import { TimeSeriesChart } from './TimeSeriesChart/TimeSeriesChart';

const containerElementRef = "customReactComponentContainer";

@Component({
  selector: "app-index-component",
  template: `<div class="container" #${containerElementRef}></div>`,
  encapsulation: ViewEncapsulation.None,
})
export class indexComponent implements AfterViewInit, OnDestroy {
  @ViewChild(containerElementRef, { static: true }) containerRef!: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    ReactDOM.render(
      <React.StrictMode>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <AreaSeriesChart title={"Area Series"} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <AreaSeries2Chart title={undefined} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <AreaSeries3 />
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <BarSeriesChart title="Bar Series Chart" />
            </div>

          </div>
          <div className="col-md-12">
            <div className="bg-white p-1 rounded mt-4">
              <LineSeriesChart />
            </div>

          </div>
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">

              <HeatmapChart />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <PieChart />
            </div>
          </div>


          {/* <div className="col-md-12">
            <div className="bg-white p-1 rounded mt-4">
              <TimeSeriesChart />
            </div>
          </div> */}
          <div className="col-md-6">
            <div className="bg-white p-1 rounded mt-4">
              <DountChart />
            </div>
          </div>
        </div>
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
