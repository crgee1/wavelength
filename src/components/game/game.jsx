import React, { useState } from 'react';
import './game.css'
import Scale from '../scale/scale';
import Spectrum from '../spectrum/spectrum';
import Score from '../score/scoreboard';
import Modal from '../modal/modal';
import AllSpectrums from '../spectrum/all_spectrum';

export default function Game() {
    const [markerValue, setMarkerValue] = useState(50);
    const [hide, setHide] = useState(false);
    const [targetValue, setTargetValue] = useState(50);
    const [pointsA, setPointsA] = useState(0);
    const [pointsB, setPointsB] = useState(1);
    const [teamATurn, setTeamATurn] = useState(true);
    const [spectrum, setSpectrum] = useState({ left: '', right: '' });
    const [spectrums, setSpectrums] = useState(AllSpectrums);
    const [psychic, setPsychic] = useState(false);
    const [modal, setModal] = useState();

    const randomCard = () => {
        const idx = Math.floor(Math.random() * spectrums.length);
        let spectrumsArr = [...spectrums];
        const card = spectrumsArr.splice(idx, 1);

        setSpectrums(spectrumsArr);
        setSpectrum(card[0]);
    }

    const randomValue = () => {
        let num = Math.floor(Math.random() * 100) + 1;
        setTargetValue(num);
    }

    const shuffle = () => {
        if (!spectrums.length) {
            setModal('end');
            return;
        };
        randomValue();
        randomCard();
        setPsychic(true);
    }

    const givePoints = (points) => {
        (teamATurn) ? setPointsA(pointsA + points) : setPointsB(pointsB + points);
    }

    const nextTurn = () => {
        setTeamATurn(!teamATurn);
        setHide(false);
        setPsychic(false);
    }

    const getPoints = () => {
        if (markerValue >= targetValue - 1.75 && markerValue <= targetValue + 1.75) {
            givePoints(4);
        }
        else if (markerValue >= targetValue - 6 && markerValue <= targetValue + 6) {
            givePoints(3);
        }
        else if (markerValue >= targetValue - 10 && markerValue <= targetValue + 10) {
            givePoints(2);
        }

        nextTurn();
    }

    return (
        <div className="game">
            <Modal
                modal={modal}
                pointsA={pointsA}
                pointsB={pointsB} 
            />
            <Score
                pointsA={pointsA}
                pointsB={pointsB}
                teamATurn={teamATurn}
            />
            <Scale 
                hide={hide}
                setHide={setHide}
                targetValue={targetValue}
                markerValue={markerValue}
                setMarkerValue={setMarkerValue}
            />
            <div className="button-container">
                {psychic ? null : <button onClick={shuffle}>Be Psychic</button>}
                {psychic && !hide ? <button onClick={() => {setHide(true)}}>Hide Target</button> : null}
                {hide ? <button onClick={getPoints}>Submit Guess</button> : null}
            </div>
            <Spectrum
                spectrum={spectrum}
            />
        </div>
    );
}