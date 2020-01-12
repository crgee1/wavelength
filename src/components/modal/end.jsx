import React from 'react';

export default function End(props) {
    const { pointsA, pointsB } = props;
    const winner = pointsA > pointsB ? 'Team A Wins' : pointsA === pointsB ? "It's a Draw" : 'Team B Wins';
    return (
        <div className="end">
            <div className="scoreboard-container">
                <div className="team-score">
                    <div>
                        Team A
                    </div>
                    {pointsA}
                </div>
                <div className="team-score">
                    <div>
                        Team B
                    </div>
                    {pointsB}
                </div>
            </div>
            <div>{winner}</div>
        </div>
    )
}