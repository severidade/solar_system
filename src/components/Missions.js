import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div className="conteiner_missions" data-testid="missions">
        <Title headline="Missões" />
        <p>Aqui entram as missões </p>
      </div>
    );
  }
}

export default Missions;
