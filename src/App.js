import React from 'react';
import './App.scss';
import Filter from './containers/Filter';


export default class extends React.Component {
    render() {
        return (<div className="App">
            <Filter></Filter>
        </div>);
    }

}