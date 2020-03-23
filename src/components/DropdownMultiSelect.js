import React from 'react';

import './DropdownMultiSelect.scss';

export default class extends React.Component {

    handleChange(event) { console.log(event.target.checked); }

    render() {
        return (
            <div className="DropdownMultiSelect">
                <span className="DropdownMultiSelect__label">{this.props.label}</span>
                <span className="DropdownMultiSelect__caret">&#9660;</span>
                <div className="DropdownMultiSelect__options">
                    {this.props.values.map((label, key) =>
                        <span className="DropdownMultiSelect__option" key={key}>
                            <input type="checkbox" id={label} checked={this.props.selected.includes(label)}></input>
                            <label>{label}</label>
                        </span>
                    )}


                </div>
            </div>
        );
    }

}