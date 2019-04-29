import React, { Component } from 'react';
import * as d3 from 'd3';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { IStockHistory, IHistory } from '../../constants/interfaces';

import styles from './styles';

interface IProps extends WithStyles<typeof styles> {
  data: IStockHistory;
}

class Chart extends Component<IProps> {
  componentDidMount() {
    // if (!this.props.data) return;

    const { data, classes } = this.props;
    const { from, to, history, stockId } = data;

    const prices: Array<number> = history.map(h => h.price) as Array<number>;

    const margin = { top: 50, right: 50, bottom: 0, left: 50 };
    const width = 500;
    const height = 400;

    d3.select('.chart')
      .selectAll('*')
      .remove();

    const svg = d3
      .selectAll(`svg[data-id="${stockId}"]`)
      .attr('width', '100%')
      .attr('height', `${height + margin.bottom + margin.top}`)
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`);

    const parseHistoryDate = d3.utcParse('%Y-%m-%dT%H:%M:%S');
    const parseDate = d3.utcParse('%Y-%m-%dT%H:%M:%S.%L');
    const formatDate = d3.timeFormat('%m-%d %H:%M:%S');

    const fromDate = new Date(formatDate(parseDate(from) as Date));
    const toDate = new Date(formatDate(parseDate(to) as Date));

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
      .attr('class', classes.line)
      .attr('d', line as any);
  }

  render() {
    let stockId = null;
    if (this.props.data) stockId = this.props.data.stockId;
    return <svg data-id={stockId} />;
  }
}

export default withStyles(styles)(Chart);
