import React from 'react';

import './Media.scss';

export default class extends React.Component {

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        return (
            <div className="Media">
                <img className="Media__poster" src={this.props.data.poster}></img>
                <span className="Media__title">{this.props.data.title}</span>
                <span className="Media__genres">{`Genres: ${this.props.data.genre.reduce((p, c) => `${p ? p + ',' : ''} ${this.capitalize(c)}`, '')}`}</span>
            </div>

        );
    }
}