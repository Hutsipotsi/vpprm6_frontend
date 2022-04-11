import React from "react";

export default function DiscSearch({ prodcat }) {

    function optionValues(startValue, endValue) {
        let up = endValue > startValue;
        let options = '';
        let step = 1;
        let values = endValue - startValue + 1;
        if(!up) {
            step = -1;
            values = startValue - endValue + 1;
        }
        for(let i = 0; i <= values; i++, startValue += step) {
            options += '<option value="' + startValue + '">' + startValue + '</option>'; 
        }
        return options;
    }

    function renderSearch() {
        return (
            <div>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Nopeus</option>
                    {optionValues(1, 15)}
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Liito</option>
                    {optionValues(1, 6)}
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Vakaus</option>
                    {optionValues(1, -5)}
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Feidi</option>
                    {optionValues(0, 5)}
                </select>
            </div>
        );
    }

    return (
        <div>
            {prodcat == 1 ? renderSearch() : null}
        </div>
    );
}