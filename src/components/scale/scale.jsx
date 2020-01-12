import React, { useState } from 'react';
import "./scale.css";

export default function Scale(props) {

    const { hide, targetValue, markerValue, setMarkerValue } = props;

    const displayMarker = () => {
        
        let style = {left: `${markerValue-.1}%`};
        return (
            <div style={style} className="marker">
                
            </div>
        );
    }

    const displayTarget = () => {
        if (hide) return null;
        let style = {left: `${targetValue-11}%`};
        
        return (
            <div style={style} className="target">
                <div className="two points">
                    2
                </div>
                <div className="three points">
                    3
                </div>
                <div className="four points">
                    4
                </div>
                <div className="three points">
                    3
                </div>
                <div className="two points">
                    2
                </div>
            </div>
        );
    }

    const handleClick = (e) => {
        const windowWidth = document.getElementById('scale').clientWidth;
        const clickPos = e.clientX - window.innerWidth * .01;
        
        setMarkerValue(clickPos / windowWidth * 100);
    }

    const adjustMarker = (right) => {
        return () => {
            if (right && markerValue < 100) {
                setMarkerValue(markerValue + .25);
            } else if (!right && markerValue > 0) {
                setMarkerValue(markerValue - .25);
            }
        }
    }

    return (
        <div className="scale-container">
            <div id="scale" className="scale" onClick={handleClick}>
                <div className="indents">
                    <div className="indent long">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent short">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent long">
                    </div>
                </div>
                <div className="indents">
                    <div className="indent long">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent short">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent long">
                    </div>
                </div>
                <div className="indents">
                    <div className="indent long">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent short">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent long">
                    </div>
                </div>
                <div className="indents">
                    <div className="indent long">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent short">
                    </div>
                    <div className="indent mid">
                    </div>
                    <div className="indent long">
                    </div>
                </div>
                {displayMarker()}
                {displayTarget()}
            </div>
            <div className="midpoint">
                <i className="fas fa-sort-up"></i>
            </div>
            <div className="controller">
                <i className="far fa-caret-square-left" onClick={adjustMarker(false)}></i>
                <i className="far fa-caret-square-right" onClick={adjustMarker(true)}></i>
            </div>
        </div>
    );
}