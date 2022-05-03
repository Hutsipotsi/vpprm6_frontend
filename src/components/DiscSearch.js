import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscSearch({ show }) {
    const [speed, setSpeed] = useState(null);
    const [glide, setGlide] = useState(null);
    const [turn, setTurn] = useState(null);
    const [fade, setFade] = useState(null);

    function resetOptions() {
        setSpeed(null);
        setGlide(null);
        setTurn(null);
        setFade(null);
    }

    function dropdownOptions(name, startValue, endValue) {
        let options = [];
        let i = 0;
        let up = endValue > startValue;
        let step = 1;
        let values = endValue - startValue + 1;
        if(!up) {
            step = -1;
            values = startValue - endValue + 1;
        }

        options.push(<option key={i} value="">{name}</option>);
        for(i = 1; i <= values; i++, startValue += step) {
            options.push(<option key={i} value={startValue}>{startValue}</option>);
        }

        return options;
    }

    function renderSearch() {    
        return (
            <form>
                <select className="properties" name="speed" id="speed" onChange={ e => setSpeed(e.target.value) }>
                    {dropdownOptions("Nopeus", 1, 15)}
                </select>
                <select className="properties" name="glide" id="glide" onChange={ e => setGlide(e.target.value) }>
                    {dropdownOptions("Liito", 1, 6)}
                </select>
                <select className="properties" name="turn" id="turn" onChange={ e => setTurn(e.target.value) }>
                    {dropdownOptions("Vakaus", 1, -5)}
                </select>
                <select className="properties" name="fade" id="fade" onChange={ e => setFade(e.target.value) }>
                    {dropdownOptions("Feidi", 0, 5)}
                </select>
                <Link className="btn btn-warning"
                to={"/products/" + speed
                + "/" + glide +
                "/" + turn +
                "/" + fade}>Hae</Link>
                <button className="btn btn-warning" onClick={() => resetOptions()}>Tyhjennä</button>
            </form>
        );
    }

    return (
        <div>
            {show ? renderSearch() : null}
        </div>
    );
}