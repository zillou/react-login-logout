import React from "react"
import { Text, View } from "react-native"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Profile = ({ data }) =>
  <View>
    { data.loading
      ? <Text>Loading</Text>
      : <Text>{data.currentUser.mobile}</Text> }
  </View>

const currentUser = gql`
  query currentUser {
    currentUser {
      mobile
    }
  }
`

export default graphql(currentUser)(Profile)
