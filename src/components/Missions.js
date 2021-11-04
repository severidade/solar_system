import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        <div className="conteiner_missions_title">
          <Title headline="Missões" />
        </div>
        <div className="conteiner_missions" data-testid="missions">
          {missions.map((mission) => (
            <div className="conteiner_mission" key={ mission.key }>
              <MissionCard // posso por a key aqyu?
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Missions;
