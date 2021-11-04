import React, { Component } from 'react';
import PropTypes from 'prop-types';
import planets from '../data/planets';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <figure>
          <img src={planetImage} alt={`Planeta ${planetName}`} />
        </figure>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
