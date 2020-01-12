import React, { useState } from 'react';
import './game.css'
import Scale from '../scale/scale';

export default function Game() {
    const [markerValue, setMarkerValue] = useState(50);
    const [hide, setHide] = useState(false);
    const [targetValue, setTargetValue] = useState(50);

    const randomValue = () => {
        let num = Math.floor(Math.random() * 100) + 1;
        setTargetValue(num);
    }

    const getPoints = () => {
        if (markerValue >= targetValue - 1.75 && markerValue <= targetValue + 1.75) {
            console.log(4)
        }
        else if (markerValue >= targetValue - 6 && markerValue <= targetValue + 6) {
            console.log(3)
        }
        else if (markerValue >= targetValue - 10 && markerValue <= targetValue + 10) {
            console.log(2)
        }
    }

    return (
        <div className="game">
            <Scale 
                hide={hide}
                setHide={setHide}
                targetValue={targetValue}
                markerValue={markerValue}
                setMarkerValue={setMarkerValue}
            />
            <div className="button-container">
                <button onClick={randomValue}>Set Target</button>
                <button onClick={() => {setHide(!hide)}}>Hide</button>
                <button onClick={getPoints}>Points</button>
            </div>
        </div>
    )
}