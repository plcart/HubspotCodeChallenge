import React from 'react';
import { connect } from 'react-redux';

import './MediaList.scss';
import { getFilteredMedia } from '../store/selectors';
import Media from '../components/Media';

class MediaList extends React.Component {
    render() {
        return (
            <div className="MediaList">
                {this.props.medias.map((m, i) => <Media key="i" data={m}></Media>)}
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
