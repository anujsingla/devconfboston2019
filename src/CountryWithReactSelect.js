import React from 'react';
import countryjson from 'country-json/src/country-by-name.json';
import Select from 'react-select';

const options = countryjson.map((c) => ({value: c.country, label: c.country}));

export function CountryWithReactSelect() {
    return (
        <div>
            <Select options={options} isMulti />
        </div>
    )
}