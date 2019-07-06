import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import countryjson from 'country-json/src/country-by-name.json';

import $ from 'jquery';
import { CountryWithoutChosen } from './CountryWithoutChosen';
import { CountryWithReactSelect } from './CountryWithReactSelect';
window.jQuery = window.$ = $;

$(document).ready(() => {
    $('.name').chosen({
        width: '50%'
    });
});

function App() {
  return (
        <div className="container">
            <header>
                <h1 className="m-b-50">Choosen Value</h1>
                <select value="" data-placeholder="Choose a Country..." className="name" tabIndex="2">
                    <option value=""></option>
                {countryjson && countryjson.map((c, index) => {
                    return <option key={index} value={c.country}>{c.country}</option>
                    })
                }
                </select>
                <hr />
                <CountryWithoutChosen />
                <hr />
                <CountryWithReactSelect />
            </header>
        </div>
  );
}

export default App;
