import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class NoticiasList extends Component {
  state = {};

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then (response=> console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Lista de noticias pe conchatumare</Text>
      </View>
    );
  }
}

export default NoticiasList;
