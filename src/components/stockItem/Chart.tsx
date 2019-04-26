import React, { Component } from 'react';
import * as d3 from 'd3';

import { IHistory } from '../../constants/interfaces';

interface IProps {
  data: Array<IHistory>;
}

class Chart extends Component<IProps> {
  componentDidMount() {
    const { data } = this.props;

    const svg = d3.select('.chart');
    const width = svg.attr('width');
    const height = svg.attr('height');

    const x = d3.scaleTime().rangeRound([0, +width]);
    const y = d3.scaleLinear().rangeRound([+height, 0]);

    const xAxis = d3.axisLeft(x);
    const yAxis = d3.axisBottom(y);

    const line = d3
      .line()
      .x((d, i) => x(d[0]))
      .y(d => y(d[1]));

    svg.append('g').call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));

    svg
      .append('path')
      .datum(data)
      .attr('d', +line as any);
  }

  render() {
    return <svg className="chart" width="100%" height="300px" />;
  }
}

export default Chart;
