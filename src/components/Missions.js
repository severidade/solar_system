import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <>
        <div className="conteiner_missions_title">
          <Title headline="Missões" />
        </div>
        <div className="conteiner_missions" data-testid="missions">
          <p>Aqui entram as missões </p>
        </div>
      </>
    );
  }
}

export default Missions;
