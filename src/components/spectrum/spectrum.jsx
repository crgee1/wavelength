import React from 'react';
import './spectrum.css';

export default function Spectrum(props) {
    const { spectrum } = props;

    return (
        <div className="spectrum-container">
            <div className="spectrum">
                <div className="half left">
                    <i className="fas fa-long-arrow-alt-left"></i>
                    {spectrum.left}
                </div>
                <div className="half right">
                    <i className="fas fa-long-arrow-alt-right"></i>
                    {spectrum.right}
                </div>
            </div>
        </div>
    )
}