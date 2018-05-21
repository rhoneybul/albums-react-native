import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import Album from './album';

class Albums extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        console.log("component mounted")
        axios.get("http://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({
                albums: response.data
            }))
    }

    renderAlbums() {
        return this.state.albums.map((album, i) => {
            return <Album key={i} album={album} />
        })
    }

    render() {

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default Albums;