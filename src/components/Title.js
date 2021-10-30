import React, { Component } from 'react';
import PropTypes from 'prop-types';// essa linha é importante para chamar a checagem de tipos

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
