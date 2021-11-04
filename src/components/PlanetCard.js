import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <figure className="conteiner_planet_image">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
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
