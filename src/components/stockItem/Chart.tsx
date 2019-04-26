import React, { Component } from 'react';
import * as d3 from 'd3';

import { IStockHistory, IHistory } from '../../constants/interfaces';

interface IProps {
  data: IStockHistory;
}

class Chart extends Component<IProps> {
  componentDidUpdate() {
    console.log('ComponentDidUpdate');
    if (!this.props.data) return;

    console.log(this.props);
    const { data } = this.props;
    const { from, to, history } = data;

    const prices: Array<number> = history.map(h => h.price) as Array<number>;

    const margin = { top: 50, right: 50, bottom: 0, left: 50 };
    const width = 500;
    const height = 400;

    const svg = d3
      .select('.chart')
      .attr('width', '100%')
      .attr('height', `${height + margin.bottom + margin.top}`)
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`);

    console.log(width, height);

    const parseHistoryDate = d3.utcParse('%Y-%m-%dT%H:%M:%S');
    const parseDate = d3.utcParse('%Y-%m-%dT%H:%M:%S.%L');
    const formatDate = d3.timeFormat('%Y-%m-%d');

    const fromDate = new Date(formatDate(parseDate(from) as Date));
    const toDate = new Date(formatDate(parseDate(to) as Date));

    console.log(formatDate(parseDate(from) as Date), from.slice(0, -3));

    const xScale = d3
      .scaleTime()
      .domain([fromDate, toDate])
      .range([0, +width]);
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(prices) as Array<number>)
      .range([+height, 0]);

    const line = d3
      .line()
      .x((d: any) => {
        console.log(new Date(formatDate(parseHistoryDate(d.data) as Date)));
        return xScale(new Date(formatDate(parseHistoryDate(d.data) as Date)));
      })
      .y((d: any) => yScale(d.price));

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));

    svg
      .append('path')
      .datum(data.history)
      .attr('class', 'line')
      .attr('d', line as any);
  }

  render() {
    return <svg className="chart" width="100%" height="300" />;
  }
}

export default Chart;
