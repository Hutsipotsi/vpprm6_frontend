import React from "react";

export default function DiscSearch({ prodcat }) {

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

        options.push(<option key={i} value="null">{name}</option>);
        for(i = 1; i <= values; i++, startValue += step) {
            options.push(<option key={i} value={startValue}>{startValue}</option>);
        }
        
        return options;
    }

    function renderSearch() {
        return (
            <form>
                <select name="nopeus" id="nopeus">
                    {dropdownOptions("Nopeus", 1, 15)}
                </select>
                <select name="liito" id="liito">
                    {dropdownOptions("Liito", 1, 6)}
                </select>
                <select name="vakaus" id="vakaus">
                    {dropdownOptions("Vakaus", 1, -5)}
                </select>
                <select name="feidi" id="feidi">
                    {dropdownOptions("Liito", 0, 5)}
                </select>
                <button className="btn btn-primary">Hae</button>
            </form>
        );
    }

    return (
        <div>
            {prodcat !== undefined && prodcat == 1 ? renderSearch() : null}
        </div>
    );
}