import React from 'react';
import './App.scss';
import Filter from './containers/Filter';
import MediaList from './containers/MediaList';
import { connect } from 'react-redux';
import { loadMedia } from './store/actions';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props.loadMedia();
    }

    render() {
        return (<div className="App" >
            <Filter></Filter>
            <hr className="App__divider"></hr>
            <MediaList></MediaList>
        </div>);
    }

}

export default connect(null, {
    loadMedia
})(App);