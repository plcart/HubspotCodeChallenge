import React from 'react';
import { connect } from 'react-redux';

import './MediaList.scss';
import { getFilteredMedia } from '../store/selectors';

class MediaList extends React.Component {
    render() {
        return (
            <div className="MediaList">
                {this.props.medias.map(m => m.title)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const medias = getFilteredMedia(state);
    return {
        medias
    };
};

export default connect(mapStateToProps, null)(MediaList);
