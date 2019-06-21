import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class GasPrices extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  formatData = () => {
    const formattedData = [];
    this.props.gasPrices.forEach((price, index, arr) => {
      if (price.location === 'US') {
        formattedData.push({
          date: moment(price.date).format('MMM'),
          USPrice: price.price,
          HawaiiPrice: arr[index + 1].price
        });
      }
    });
    return formattedData;
  };

  render() {
    const gasPrices = this.formatData();
    return (
        props.friends.map(friend => <Friend />)
    )

const mapStateToProps = ({ error, gasPrices, fetchingData }) => ({
  error,
  gasPrices,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(GasPrices)
);