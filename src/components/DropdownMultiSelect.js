import React from 'react';

import './DropdownMultiSelect.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    change(event, label) {
        event.stopPropagation();
        let selectedOptions = [...this.props.selected];
        if (selectedOptions.includes(label)) {
            this.props.change(selectedOptions.filter(l => l !== label));
        } else {
            selectedOptions.push(label);
            this.props.change(selectedOptions)
        }
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className="DropdownMultiSelect" onClick={this.toggle.bind(this)}>
                <span className="DropdownMultiSelect__label">{this.props.label}</span>
                <span className="DropdownMultiSelect__caret">&#9660;</span>
                <div className={this.state.isOpen ? "DropdownMultiSelect__options" : "DropdownMultiSelect__options--hide"}>
                    {this.props.values.map((label, key) =>
                        <span className="DropdownMultiSelect__option" key={key} onClick={(e) => this.change(e, label)}>
                            <input className="DropdownMultiSelect__option-input" type="checkbox" id={label} checked={this.props.selected.includes(label)} readOnly></input>
                            <label className="DropdownMultiSelect__option-label">{label}</label>
                        </span>
                    )}


                </div>
            </div >
        );
    }

}