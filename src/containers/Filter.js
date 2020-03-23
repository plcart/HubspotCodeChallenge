import React from 'react';

import './Filter.scss';
import DropdownMultiSelect from '../components/DropdownMultiSelect';

export default class extends React.Component {
    render() {
        return (
            <div className="Filter">
                <div className="Filter__dropdown-options">
                    <DropdownMultiSelect label="Genre" values={["action", "fiction"]} selected={["action"]}></DropdownMultiSelect>
                </div>
            </div>
        );
    }

}
