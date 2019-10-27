import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const NewsQuery = gql`
query contentView_b0488406c55f4bf5a28ceb86138c948c($first: Int, $skip: Int, $where: PostWhereInput, $orderBy: PostOrderByInput) {
 contentView_content_b0488406c55f4bf5a28ceb86138c948c: postsConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy){
  edges {
    node {
      status
      updatedAt
      createdAt
      id
      title
      slug
      category
      preview
      body
      author
      date
    }
  }
}
}
`

const NewsWrapper = graphql(NewsQuery)(NoticiasList);

class NoticiasList extends Component {
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <View>
        <Text>Lista de noticias pe conchatumare</Text>
      </View>
    );
  }
}

export default NoticiasList;
