import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div className="mission" data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <p className="mission_data" data-testid="mission-year">{year}</p>
        <p className="mission_data" data-testid="mission-country">{country}</p>
        <p className="mission_data" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
