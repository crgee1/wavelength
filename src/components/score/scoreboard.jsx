import React from 'react';
import './scoreboard.css';

export default function Score(props) {
    const { pointsA, pointsB, teamATurn } = props;
    return (
        <div className="scoreboard-container">
            <div className={`team-score ${teamATurn ? 'turn' : null}`}>
                <div>
                    Team A
                </div>
                {pointsA}
            </div>
            <div className={`team-score ${!teamATurn ? 'turn' : null}`}>
                <div>
                    Team B
                </div>
                {pointsB}
            </div>
        </div>
    )
}