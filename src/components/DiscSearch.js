import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscSearch({ show }) {
    const [nopeus, setNopeus] = useState(null);
    const [liito, setLiito] = useState(null);
    const [vakaus, setVakaus] = useState(null);
    const [feidi, setFeidi] = useState(null);

    function resetOptions() {
        setNopeus(null);
        setLiito(null);
        setVakaus(null);
        setFeidi(null);
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
                <select name="nopeus" id="nopeus" onChange={ e => setNopeus(e.target.value) }>
                    {dropdownOptions("Nopeus", 1, 15)}
                </select>
                <select name="liito" id="liito" onChange={ e => setLiito(e.target.value) }>
                    {dropdownOptions("Liito", 1, 6)}
                </select>
                <select name="vakaus" id="vakaus" onChange={ e => setVakaus(e.target.value) }>
                    {dropdownOptions("Vakaus", 1, -5)}
                </select>
                <select name="feidi" id="feidi" onChange={ e => setFeidi(e.target.value) }>
                    {dropdownOptions("Feidi", 0, 5)}
                </select>
                <Link className="btn btn-primary"
                to={"/products/" + nopeus
                + "/" + liito +
                "/" + vakaus +
                "/" + feidi}>Hae</Link>
                <button className="btn btn-secondary" onClick={() => resetOptions()}>Tyhjennä</button>
            </form>
        );
    }

    return (
        <div>
            {show ? renderSearch() : null}
        </div>
    );
}