import React from 'react';
import { connect } from 'react-redux';

import './Filter.scss';

import DropdownMultiSelect from '../components/DropdownMultiSelect';
import { getAvailableGenres, getAvailableReleaseYears, getFilter } from '../store/selectors';
import { applyFilters, clearFilters } from '../store/actions';

class Filter extends React.Component {

    genreChange(selectedGenres) {
        this.props.applyFilters({
            ...this.props.filter,
            selectedGenres
        });
    }

    yearChange(selectedReleaseYears) {
        this.props.applyFilters({
            ...this.props.filter,
            selectedReleaseYears
        });
    }

    search(e) {
        const searchFilter = e.target.value;
        this.props.applyFilters({
            ...this.props.filter,
            searchFilter
        });
    }

    typeChange(e) {
        const type = e.target.value;
        this.props.applyFilters({
            ...this.props.filter,
            type
        });
    }

    render() {
        return (
            <div className="Filter" >
                <div className="Filter__filter-line">
                    <div className="Filter__dropdown-options" >
                        <DropdownMultiSelect label="Genre" values={this.props.genres} selected={this.props.filter.selectedGenres} change={this.genreChange.bind(this)}></DropdownMultiSelect>
                        <DropdownMultiSelect label="Year" values={this.props.years} selected={this.props.filter.selectedReleaseYears} change={this.yearChange.bind(this)}></DropdownMultiSelect>
                    </div>
                    <input type="text" id="searchFilter" placeholder="Search by Title" className="Filter__search-input" value={this.props.searchFilter} onChange={(e) => this.search(e)}></input>
                </div>
                <div className="Filter__filter-line">
                    <div className="Filter__radio-options">
                        <label className="Filter__radio-option">
                            <input type="radio" id="movies" name="type" value="movie" checked={this.props.filter.type === 'movie'} onChange={(e) => this.typeChange(e)}></input>
                            Movies
                        </label>
                        <label className="Filter__radio-option">
                            <input type="radio" id="books" name="type" value="book" checked={this.props.filter.type === 'book'} onChange={(e) => this.typeChange(e)}></input>
                            Books
                        </label>
                    </div>
                    <button type="button" className="Filter__clear-button" onClick={() => this.props.clearFilters()}>Clear Filters</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    const genres = getAvailableGenres(state);
    const years = getAvailableReleaseYears(state);
    const filter = getFilter(state);
    return {
        genres,
        years,
        filter
    };
}

export default connect(mapStateToProps, {
    applyFilters,
    clearFilters
})(Filter);
