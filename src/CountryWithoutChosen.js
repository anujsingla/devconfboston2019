import React from 'react';
import countryjson from 'country-json/src/country-by-name.json';

export function CountryWithoutChosen() {
    return (
        <div>
            <select id="simplehtml-select" data-placeholder="Choose a Country..." className="" tabIndex="2">
                <option value=""></option>
                {countryjson && countryjson.map((c, index) => {
                    return <option key={index} value={c.country}>{c.country}</option>
                })
                }
            </select>
        </div>
    )
}