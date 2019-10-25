import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NoticiasList from './NoticiasList';

class NoticeList extends Component {
  render () {
    return (
      <View>
        <NoticiasList />
      </View>
    );
  }
}

export default NoticeList;
