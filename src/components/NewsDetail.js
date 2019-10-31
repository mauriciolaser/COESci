import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {graphql, Query} from 'react-apollo';
import gql from 'graphql-tag';
import CardSection from './common/CardSection'


class NoticiasDetail extends Component {
  render() {
    const {data} = this.props;
    console.log(data.posts)
    return(
        <Text>NewsDetail</Text>
    )
  }
}


export const News = gql `query PostsQuery{
  posts{
    title
    preview
    author
    date
  }
}
`

const NewsPreview = graphql(News)(NoticiasDetail)


export default NewsPreview;
