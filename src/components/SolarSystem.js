import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">

        <div className="conteiner_planeta_title">
          <Title headline="Planetas" />
        </div>

        <div className="conteiner_planeta">
          {planets.map((planet) => (
            <div className="planeta" key={ planet.name }>
              <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default SolarSystem;
